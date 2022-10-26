## SSL COMMERZ Payment Gateway for Nodejs

This is a Nodejs library for SSLCOMMERZ payment gateway. This library is developed by [SSLCommerz](https://www.sslcommerz.com/).

## Installation

```bash
npm install sslcommerz
```

## Usage

```javascript
const SSLCommerz = require("sslcommerz");

const sslcommerz = new SSLCommerz({
  store_id: "your store id",
  store_passwd: "your store password",
  isSandboxMode: true,
});

sslcommerz
  .init({
    total_amount: 100,
    currency: "BDT",
    tran_id: "REF123",
    success_url: "http://localhost:3000/success",
    fail_url: "http://localhost:3000/fail",
    cancel_url: "http://localhost:3000/cancel",
    ipn_url: "http://localhost:3000/ipn",
    shipping_method: "NO",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: "Customer Name",
    cus_email: "Customer Email",
    cus_add1: "Customer Address",
    cus_add2: "Customer Address",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Customer Address",
    ship_add2: "Customer Address",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: "1000",
    ship_country: "Bangladesh",
    multi_card_name: "mastercard,visacard,amexcard",
    value_a: "ref001_A",
    value_b: "ref002_B",
    value_c: "ref003_C",
    value_d: "ref004_D",
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

[SSLCommerz](https://www.sslcommerz.com/)

> Thanks for using SSLCOMMERZ Payment Gateway. If you have any query, please contact us at [support](mailto:support@sslcommerz.com)
