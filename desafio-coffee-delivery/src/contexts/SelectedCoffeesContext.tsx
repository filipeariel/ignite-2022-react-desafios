import React, { createContext, ReactNode, useEffect, useState } from "react";
import * as zod from "zod";

const customerInformationFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  number: zod.string().min(1, "Informe o número"),
  city: zod.string().min(1, "Informe a cidade"),
  complement: zod.string().optional(),
  street: zod.string().min(1, "Informe a rua"),
  neighborhood: zod.string().min(1, "Informe o bairro"),
  uf: zod.string().min(1, "Informe a UF"),
});

type CustomerInformationFormData = zod.infer<
  typeof customerInformationFormValidationSchema
>;

interface SelectedCoffees {
  id: number;
  name: string;
  quantity: number;
  price: number;
  img: string;
}

interface SelectedCoffeesContextType {
  selectedCoffees: SelectedCoffees[] | undefined;
  ShopCoffee: (coffee: SelectedCoffees) => void;
  setSelectesCoffees: React.Dispatch<React.SetStateAction<SelectedCoffees[]>>;
  formData: CustomerInformationFormData | undefined;
  includeFormData: (formData: CustomerInformationFormData) => void;
  paymentMethod: string;
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectedCoffeesContext = createContext(
  {} as SelectedCoffeesContextType
);

interface SelectedCoffeesContextProviderPros {
  children: ReactNode;
}

export function SelectedCoffeesContextProvider({
  children,
}: SelectedCoffeesContextProviderPros) {
  const [selectedCoffees, setSelectesCoffees] = useState<SelectedCoffees[]>(
    () => {
      const storedSelectedCoffees = localStorage.getItem(
        "@coffee-delivery:selected-coffees-state-1.0.0"
      );
      if (storedSelectedCoffees) {
        return JSON.parse(storedSelectedCoffees);
      }
      return [];
    }
  );
  const [formData, setFormData] = useState<CustomerInformationFormData>();
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    const stateJSON = JSON.stringify(selectedCoffees);

    localStorage.setItem(
      "@coffee-delivery:selected-coffees-state-1.0.0",
      stateJSON
    );
  }, [selectedCoffees]);

  function includeFormData(formData: CustomerInformationFormData) {
    setFormData(formData);
  }

  function ShopCoffee(coffee: SelectedCoffees) {
    if (
      !selectedCoffees.find((selectedCoffee) => selectedCoffee.id === coffee.id)
    ) {
      setSelectesCoffees([...selectedCoffees, coffee]);
    } else {
      setSelectesCoffees(
        selectedCoffees.map((selectedCoffee) => {
          if (selectedCoffee.id === coffee.id)
            return {
              ...selectedCoffee,
              quantity: selectedCoffee.quantity + coffee.quantity,
            };
          return selectedCoffee;
        })
      );
    }
  }

  return (
    <SelectedCoffeesContext.Provider
      value={{
        selectedCoffees,
        ShopCoffee,
        setSelectesCoffees,
        includeFormData,
        formData,
        paymentMethod,
        setPaymentMethod,
      }}
    >
      {children}
    </SelectedCoffeesContext.Provider>
  );
}
