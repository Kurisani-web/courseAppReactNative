export const Commons = {
  listSelected() {
    const typeCourse = [
      {title: 'Tất cả', type: ''},
      {title: 'Miễn phí', type: 'Free'},
      {title: 'Trả phí', type: 'Buy'},
    ];

    return {typeCourse};
  },

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },
  validatePhoneNumber(number) {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    return phoneRegex.test(number);
  },
  validatePassword(password) {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  },

  convertPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  },
};
