import React from "react";
import ScrollToTopOnMount from "../helpers/ScrollToTopOnMount";

const Reach = () => {
  return (
    <div>
      <ScrollToTopOnMount />

      <div>
        <h2>Reach</h2>

        <strong>
          REACH : Authorised Chemicals and SVHC(s) Incorporated in Articles
          above 0.1% (w/w)
        </strong>
        <p>
          At this time, as far as we are aware, and have been notified by ECHA,
          our chemical suppliers, etc., the only substances of very high concern
          included on Annexe XIV that we knowingly utilise in the application of
          coatings to our customers’ free issue components, are Strontium
          Chromate, Cadmium, some general solvents, lead fluoroborate and
          Disodium Tetraborate Decahydrate, and Sodium Tetraborate Pentahydrate.
          To date, these chemicals have been included on the candidate list, and
          in some cases are being included in Annexe XIV, with a view to only
          being permitted subject to an approved authorisation.
        </p>
        <p>
          As of 21st September, 2017, Sodium Dichromate, Potassium Dichromate,
          Chromium Trioxide have been included on annexe XIV and can now only be
          used under the conditions of, and for the uses described, in a
          suitably approved authorisation. In the case of the two dichromates
          their use in metal finishing is covered by the CCST authorisation (but
          only for aerospace applications for the next 7 years) and in the case
          of Chromium Trioxide their continued use is covered by the CTAC
          authorisation (7 years for aerospace and 4 years for general
          engineering).
        </p>
        <p>
          Sodium/Potassium Dichromate is incorporated in low concentrations, as
          required by numerous aerospace specifications, and some existing
          defence specifications, in the following solutions :
        </p>
        <ul>
          <li>
            Nitric/dichromate passivates, used for steel (some alloys) and
            stainless steel.
          </li>
          <li>Brush alocrom.</li>
          <li>Cadmium passivates (both clear and chromate passivates).</li>
          <li>
            Dichromate seal, used for sulphuric acid and chromic acid anodising.
          </li>
        </ul>
        <p>
          The good news is that, where still employed for aerospace uses, in the
          case of brush alocrom and any of the passivates they merely result in
          the chromate conversion of the surface and thus there is no
          sodium/potassium dichromate left on the article. Also, in the case of
          the dichromate seal used in some instances after sulphuric acid
          anodising and chromic anodising, the very dilute potassium dichromate
          results in the deposition of aluminium oxydichromate. Thus, in every
          instance, negligible (i.e. less than 0.1% w/w) sodium/potassium
          dichromate should be present on the coated components. NB: In the case
          of stainless steel passivation, other nitric only or citric acid
          passivates are permitted as alternatives for some materials.
        </p>
        <p>
          Chromic acid is incorporated in small amounts in the deoxidiser
          solution currently used in our chromic acid anodising and alocroming,
          mainly for aerospace applications. This is used as a pre-treatment
          step in these processes to strip the naturally occurring oxide film
          from aluminium parts and thus, in every instance, the subsequent
          processing should remove any residual hexavalent chrome, resulting in
          less than 0.1% w/w on the finished coated parts. NB: We are also
          currently looking at replacing this deoxidiser with a non-chromated
          version approved by Airbus.
        </p>
        <p>
          It is also obviously employed in the chromic acid anodising baths and
          is present also in a Def Stan (03-12) type one, two and three brass
          passivate, alocrom 1200 (25-50%) and our anodising control stripper.
          It is employed in very small amounts in a very dilute chromic seal
          (0.02%) sometimes used for thin film sulphuric acid anodising and
          Airbus’s TSA and a very dilute (0.05%) hot chrome rinse used when
          phosphating components. It is also used in a very dilute concentration
          (0.25%) in the anodic etch sometimes employed in cadmium plating.
          Still, in all cases, it should result in negligible (i.e. less than
          0.1% w/w)chromic acid being present on any finished coated components.
        </p>
        <p>
          In the case of chromic acid anodising what is actually deposited on to
          the surface of the article/component is an oxide film approximately 2
          - 6 microns thick and, as such, providing they are processed
          correctly, negligible (i.e. less than 0.1% w/w) chromic acid should be
          present on the anodised components.
        </p>
        <p>
          With regard to aerospace paints, hexavalent chrome is found in many
          forms in those we commonly use, including strontium chromate (now
          included on Annexe XIV), which is found in many aerospace primers in
          concentrations up to 30%. As it is not converted during the
          application process it will be present in quite high levels in the
          cured primer coating and, depending on the structure of the article
          coated (surface area to volume ratio) may exceed the 0.1% w/w
          permitted on finished components.
        </p>
        <p>
          Cadmium is obviously used at Ashton & Moore Ltd. in the cadmium
          plating of components and, as the name suggests, is plated on to the
          surface of the components, typically to a thickness of between 3.8- 15
          microns depending on the specification. Thus, in some thin parts with
          large surface areas, it might be possible to exceed the 0.1% w/w on
          finished components.
        </p>
        <p>
          The two solvents, Methoxyethanol and Ethoxyethanol, are possibly
          present in some of the paints we apply. However, due to the volatile
          nature, upon curing of the paints most, if not all of them, if
          present, should evaporate and thus, in all instances, the resultant
          amount on the finished article should be less than the 0.1% w/w.
        </p>
        <p>
          Disodium Tetraborate is present in very low levels (less than 1%) in
          the anodic cleaner on our cadmium plating line and thus is very
          unlikely to be deposited on the finished plated components at levels
          exceeding 0.1% w/w.
        </p>
        <p>
          In the case of lead indium plating the lead plating solution employs
          lead fluoroborate (23%) although this is not what is deposited on the
          finished coated part, and thus the resultant amount of the finished
          article should be less than 0.1% w/w.
        </p>
        <p>
          Finally, Turco 4215 (used as an aqueous cleaner on most of our process
          lines) apparently includes sodium tetraborate pentahydrate, which is
          on the SVHC list. Again, though, as this is used in initial stages of
          processing as a cleaner, and subsequently rinsed off prior to further
          chemical processing, it is unlikely to be present on finished
          components at all and almost certainly at levels below 0.1%.
        </p>
      </div>
    </div>
  );
};

export default Reach;
