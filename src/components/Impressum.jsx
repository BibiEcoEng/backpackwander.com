import React from "react";
import { motion } from "framer-motion";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Impressum
          </h1>

          <div className="space-y-8">
            {/* Company Details */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#52a77f]">
                Company Information
              </h2>
              <div className="space-y-2 text-gray-300">
                <p>
                  <strong>Company Name:</strong> Backpack Wander GmbH
                </p>
                <p>
                  <strong>Address:</strong> Kolonnenstraße 8, 10827 Berlin,
                  Germany
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@backpackwander.com"
                    className="text-[#52a77f] hover:underline"
                  >
                    info@backpackwander.com
                  </a>
                </p>
                <p>
                  <strong>Commercial Register:</strong> HRB 282058 B
                </p>
                <p>
                  <strong>Register Court:</strong> Charlottenburg Commercial
                  Court, Berlin
                </p>
                <p>
                  <strong>Managing Director:</strong> Biljana Habel
                </p>
              </div>
            </section>

            {/* Business Description */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#52a77f]">
                Business Description
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Backpack Wander GmbH provides specialized QA/QC engineering
                  services and digital tools for the construction industry.
                </p>
                <p>
                  Our two main service pillars are:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Pipeline Quality:</strong> Engineering and QA/QC
                    services including welding traceability, documentation, site
                    inspections, and ISO compliance
                  </li>
                  <li>
                    <strong>BW Digit:</strong> Digital tools and automation
                    solutions for construction site documentation and management
                  </li>
                </ul>
              </div>
            </section>

            {/* Liability Notice */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#52a77f]">
                Liability Notice
              </h2>
              <p className="text-gray-300">
                Despite careful monitoring of content, we as operators of this
                website are not responsible for the content of external links.
                The responsibility for the content of linked pages always lies
                with the respective provider or operator of the pages. At the
                time of linking, the linked pages were checked for possible
                violations of law. No illegal content was apparent at that time.
                However, continuous monitoring of the content of linked pages
                without specific evidence of infringement is not reasonable. If
                we become aware of any infringements, we will remove such links
                immediately.
              </p>
            </section>

            {/* Copyright */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#52a77f]">
                Copyright
              </h2>
              <p className="text-gray-300">
                © {new Date().getFullYear()} Backpack Wander GmbH. All rights
                reserved. The content and structure of this website, including
                text, images, graphics, and their arrangement, are protected by
                copyright. Reproduction or use of these elements without express
                permission is prohibited.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-[#52a77f]/10 to-[#52a77f]/5 border border-[#52a77f]/30 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#52a77f]">
                Contact
              </h2>
              <p className="text-gray-300">
                For any questions regarding this impressum, please contact us at:
              </p>
              <p className="mt-4">
                <a
                  href="mailto:info@backpackwander.com"
                  className="text-[#52a77f] hover:underline font-semibold"
                >
                  info@backpackwander.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Impressum;
