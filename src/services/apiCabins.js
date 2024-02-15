import supabase, { supabaseUrl } from './supabase';

//? Read Cabins - select("*")
export const getCabins = async () => {
  const { data, error } = await supabase.from('cabins').select('*');
  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
};

//? Create Cabin - insert([])
export const createEditCabin = async (newCabin, id) => {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //-- Create / Edit Cabin
  let query = supabase.from('cabins');

  // Create Cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  // Edit Cabin
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be created');
  }

  if (hasImagePath) return data;
  //-- Upload Image
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  //? Delete the cabin if there was an error uploading images
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.error(error);
    throw new Error(
      'Cabin image could not be uploaded and cabin was not created'
    );
  }
  return data;
};

//? Update Cabin - update({})

// export const updateCabin = async (id, newObj) => {
//   const { data, error } = await supabase
//     .from('cabins')
//     .update(newObj)
//     .eq('id', id)
//     .select();

//   if (error) {
//     console.error(error);
//     throw new Error('Cabins could not be updated');
//   }
//   return data;
// };

//? Delete Cabin - delete()
export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);
  if (error) {
    console.error(error);
    throw new Error('Cabin could not be deleted');
  }

  return data;
};
