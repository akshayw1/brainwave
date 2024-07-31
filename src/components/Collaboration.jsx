import Section from "./Section";
import Heading from "./Heading";

const Collaboration = () => {
  return (
    <Section id="collaboration">
      <div className="container">
        <Heading title="Terms and Conditions" />

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h4 className="h4 mb-4">Services Offered:</h4>
            <p className="body-2 text-n-3">
              We, Exel Leads, specialize in providing lead generation services online, assisting businesses in finding unlimited leads to grow their ventures. Our services include lead generation through online searches from different sources.
            </p>
          </div>

          <div>
            <h4 className="h4 mb-4">Client Responsibilities:</h4>
            <p className="body-2 text-n-3">
              Clients are expected to provide accurate information and cooperate in the lead generation process by supplying necessary data or insights to optimize the service. Any delay or failure to provide essential information may affect service delivery timelines.
            </p>
          </div>

          <div>
            <h4 className="h4 mb-4">Lead Quality and Guarantee:</h4>
            <p className="body-2 text-n-3">
              While we strive to provide high-quality leads, we cannot guarantee the conversion of leads into paying customers. We commit to delivering leads that meet our quality standards, sourced through legitimate means and validated to the best of our abilities.
            </p>
          </div>

          <div>
            <h4 className="h4 mb-4">Data Confidentiality and Usage:</h4>
            <p className="body-2 text-n-3">
              All client information, data, and leads obtained during our services will be handled with the utmost confidentiality. However, we reserve the right to use aggregated, anonymized data for analytical or marketing purposes.
            </p>
          </div>

          <div>
            <h4 className="h4 mb-4">Service Modifications and Termination:</h4>
            <p className="body-2 text-n-3">
              We reserve the right to modify our services, terms, or pricing with prior notice. Clients have the right to terminate services based on agreed-upon terms, subject to any applicable cancellation fees.
            </p>
          </div>

          <div>
            <h4 className="h4 mb-4">Limitation of Liability:</h4>
            <p className="body-2 text-n-3">
              While we make every effort to provide accurate and reliable services, we shall not be held liable for any direct or indirect damages, losses, or disruptions incurred by clients using our services.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
