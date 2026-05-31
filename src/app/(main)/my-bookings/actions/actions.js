const cancelBooking = async (bookingId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings/${bookingId}`, {
        method: "PATCH",
        headers: {
            'content-type': 'application/json'
        }
    })

    const data = await res.json();
    // console.log(data);
    if (data.modifiedCount > 0) {
        toast.success('Booking Canceled Successfully!');
        window.location.reload();
    } else {
        toast.error("Failed to cancel! Try again later! ")
    }
}
export default cancelBooking;