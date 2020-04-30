export interface ProductBoxProps {
  img: string;
  title: string;
  about: string;
  price: string;
  product_id: string;
}


export interface Product {
    product_id: string,
    tittle: string,
    about: string,
    price: string,
    img: string,
}

export interface FormStatus {
  isFormSaved: boolean
}

export interface CustomFieldProps {
  errors: any;
  touched: any;
  placeholder: string;
  name: string;
}

export interface ThemeProps {
  theme: {
    primary: string,
    secondary: string
  }
}