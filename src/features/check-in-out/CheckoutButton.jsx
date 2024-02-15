import Button from '../../ui/Button';
import { useCheckOut } from './useCheckout';

function CheckoutButton({ bookingId }) {
  const { isCheckingOut, checkOut } = useCheckOut();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkOut(bookingId)}
      disable={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
