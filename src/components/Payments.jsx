import Section from "./Section";
import Heading from "./Heading";

const Payments = () => {
  return (
    <Section id="payments">
      <div className="container">
        <Heading title="Payment" />

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h4 className="h4 mb-4">Payment Terms:</h4>
            <p className="body-2 text-n-3">
              Our payment terms are outlined as follows Specify payment terms
              such as upfront payments, recurring billing, etc. Payments are
              due within 30 days of invoicing unless otherwise agreed upon.
            </p>
          </div>

          <div>
            <h4 className="h4 mb-4">Pricing Structure</h4>
            <p className="body-2 text-n-3">
              Our pricing structure is based on subscription model, per-lead
              pricing.
            </p>
          </div>

          <div>
            <h4 className="h4 mb-4">Payment Methods:</h4>
            <p className="body-2 text-n-3">
              Accepted payment methods include UPI, Debit Cards, Credit Cards.
              All payments should be made in the designated currency.
            </p>
          </div>

          <div>
            <h4 className="h4 mb-4">Refund Policy</h4>
            <p className="body-2 text-n-3">
              No refunds are provided. Please contact us for more details on
              the given email id or WhatsApp number.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Payments;
