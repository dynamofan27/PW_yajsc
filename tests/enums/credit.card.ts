export type CreditCardDetails = {
  creditCardNumber: string;
  expirationDate: string;
  cvv: string;
  cardHolderName: string;
};

function getExpirationDate(offsetMonths: number): string {
  const now = new Date();
  now.setMonth(now.getMonth() + offsetMonths);

  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  return `${month}/${year}`;
}

export const CreditCardData: CreditCardDetails = {
  creditCardNumber: "1234-5678-9101-1121",
  expirationDate: getExpirationDate(3),
  cvv: "111",
  cardHolderName: "Vladyslav Test",
};
