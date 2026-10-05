

/**
 * GIẢI THÍCH LỖI DOT NOTATION:
 * Dot Notation (bookingReservation.priceKey) thất bại vì nó cố gắng truy cập
 * trực tiếp thuộc tính có tên là "priceKey" trên đối tượng bookingReservation.
 * Do đối tượng không chứa thuộc tính literal nào tên "priceKey", kết quả trả về undefined.
 * 
 * GIẢI PHÁP:
 * Để truy cập thuộc tính thông qua giá trị động lưu trong một biến,
 * ta phải sử dụng Bracket Notation: bookingReservation[priceKey].
 */

const bookingReservation = {
    bookingId: "BK-2024-8891",
    guestName: "Trần Minh Quang",
    roomType: "Deluxe Ocean View",
    roomPrice: 1500000,
    checkInHour: 9
};

const priceKey = "roomPrice";

const basePrice = bookingReservation[priceKey];

let surcharge = 0;
if (bookingReservation.checkInHour < 12) {
    surcharge = basePrice * 0.3;
    bookingReservation.surcharge = surcharge;
} else {
    bookingReservation.surcharge = 0;
}

const totalAmount = basePrice + surcharge;
bookingReservation.totalAmount = totalAmount;

console.log("Mã đặt phòng:", bookingReservation.bookingId);
console.log("Khách hàng:", bookingReservation.guestName);
console.log("Phụ thu nhận phòng sớm:", bookingReservation.surcharge);
console.log("Tổng số tiền thanh toán:", bookingReservation.totalAmount);