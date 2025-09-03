import { Locator, Page } from "@playwright/test";
import { CreditCardDetails } from "../tests/enums/credit.card";

export class CheckoutPage {
    page: Page;
    state: Locator;
    postCode: Locator;
    paymentMethod: Locator;
    creditCardNumber: Locator;
    expirationDate: Locator;
    cvv: Locator;
    cardHolderName: Locator;
    confirmButton: Locator;
    successPayment: Locator;
    checkoutButton2: Locator;
    checkoutButton3: Locator;

    constructor(page: Page) {
        this.page = page;
        this.state = this.page.getByTestId('state');
        this.postCode = this.page.getByTestId('postal_code');
        this.paymentMethod = this.page.getByTestId('payment-method');
        this.creditCardNumber = this.page.getByTestId('credit_card_number');
        this.expirationDate = this.page.getByTestId('expiration_date');
        this.cvv = this.page.getByTestId('cvv');
        this.cardHolderName = this.page.getByTestId('card_holder_name');
        this.confirmButton = this.page.getByTestId('finish');
        this.successPayment = this.page.getByTestId('payment-success-message');
        this.checkoutButton2 = this.page.getByTestId('proceed-2');
        this.checkoutButton3 = this.page.getByTestId('proceed-3');
    }

    async fillShippingAddress(state: string, postCode: string): Promise<void> {
        await this.state.fill(state);
        await this.postCode.fill(postCode);
    }

    async fillCreditCard(details: CreditCardDetails): Promise<void>  {
        await this.creditCardNumber.fill(details.creditCardNumber);
        await this.expirationDate.fill(details.expirationDate);
        await this.cvv.fill(details.cvv);
        await this.cardHolderName.fill(details.cardHolderName);
    }

}