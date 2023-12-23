import Airbus from "./components/Approvals/Airbus";
import Babcock from "./components/Approvals/Babcock";
import Heroux from "./components/Approvals/Heroux";
import BAeSystems from "./components/Approvals/BAeSystems";
import SpiritAeroSystemsEurope from "./components/Approvals/SpiritAeroSystemsEurope";
import RRCS from "./components/Approvals/RRCS";
import MeggittAerospace from "./components/Approvals/MeggittAerospace";
import EatonAeroquipAeroDivision from "./components/Approvals/EatonAeroquipAeroDivision";
import Claverham from "./components/Approvals/Claverham";
import FlightRefuelling from "./components/Approvals/FlightRefuelling";
import SafranPowerUK from "./components/Approvals/SafranPowerUK";
import CollinsAerospace from "./components/Approvals/CollinsAerospace";
import Liebherr from "./components/Approvals/Liebherr";
import Lockheed from "./components/Approvals/Lockheed";
import MoogAerocraftGroup from "./components/Approvals/MoogAerocraftGroup";
import HSMarstonAerospace from "./components/Approvals/HSMarstonAerospace";
import MartinBakerAircraft from "./components/Approvals/MartinBakerAircraft";
import MessierBugattiDowty from "./components/Approvals/MessierBugattiDowty";
import Dowty from "./components/Approvals/Dowty";
import MettisAerospace from "./components/Approvals/MettisAerospace";
import ParkerHannifinAndPrattAndWhitney from "./components/Approvals/ParkerHannifinAndPrattAndWhitney";
import HawkerBeechcraft from "./components/Approvals/HawkerBeechcraft";
import RollsRoyceAerospaceAndOverhaulAndRepair from "./components/Approvals/RollsRoyceAerospaceAndOverhaulAndRepair";
import RollsRoyceDeutschland from "./components/Approvals/RollsRoyceDeutschland";
import TriumphActuationSystems from "./components/Approvals/TriumphActuationSystems";
import GEAviation from "./components/Approvals/GEAviation";
import MODDefenceStandards from "./components/Approvals/MODDefenceStandards";
import ThirdPartyAccreditationScope from "./components/Approvals/Third";

const approvalComponents = {
  Airbus,
  Babcock,
  Heroux,
  BAeSystems,
  SpiritAeroSystemsEurope,
  RRCS,
  MeggittAerospace,
  EatonAeroquipAeroDivision,
  Claverham,
  FlightRefuelling,
  SafranPowerUK,
  CollinsAerospace,
  Liebherr,
  Lockheed,
  MoogAerocraftGroup,
  HSMarstonAerospace,
  MartinBakerAircraft,
  MessierBugattiDowty,
  Dowty,
  MettisAerospace,
  ParkerHannifinAndPrattAndWhitney,
  HawkerBeechcraft,
  RollsRoyceAerospaceAndOverhaulAndRepair,
  RollsRoyceDeutschland,
  TriumphActuationSystems,
  GEAviation,
  MODDefenceStandards,
  ThirdPartyAccreditationScope,
};

const news = [
  {
    title: "A year of Success at Ashton & Moore Ltd.",
    description:
      "In order to permit Ashton & Moore to continue as one of the best sub-contract metal finishers in the dynamic global Aerospace and Defence markets, fulfil our commitment to manufacturing 4.0 and move with the times, we have had a busy, yet fruitful year. Helped by a Midlands Aerospace and Nottingham University ERDF Aerospace UP Grant, we have improved our processing, inspection, data analysis, IT and communication capabilities. Indeed, we have not only attained Cyber Essentials Certification, but as a result of an invitation by a major global customer, attained JOSCAR registration. All of which illustrates our goal to provide the best possible service to our customers, both now and in the future.",
    image: "https://www.ashton-moore.co.uk/wp-content/uploads/2022/10/AM.jpg",
  },
];

const sections = [
  {
    title: "Anodising",
    description:
      "As aluminium 'rusts' it produces a loose dry white powder, aluminium oxide. The anodising process artificially produces this film but as a hard, dense wear-resistant surface.",
    linkTo: "/Anodising",
    content: (
      <div>
        <p>
          As aluminium 'rusts,' it produces a loose dry white powder, aluminium
          oxide. The anodising process artificially produces this film but as a
          hard, uniform, dense wear-resistant surface. The two most common ways
          to produce this film are by passing a DC current through parts
          immersed in an electrolytic solution, usually either sulphuric acid or
          chromic acid. Recently, sulphuric acid mixed with Tartaric acid or
          Boric acid has been used as a method of replacing the less
          environmentally acceptable Chromic acid solution. The passing of the
          current liberates high volumes of Oxygen at the surface of the
          aluminium, aiding controlled formation of the oxide layer. These
          processes do not produce a coating but are a conversion of the surface
          aluminium to aluminium oxide and are therefore metallurgically bonded.
        </p>
        <p>
          Both the Chromic and sulphuric acid methods produce a dense layer,
          which, because it is porous, requires a subsequent sealing process to
          close the pores and prevent further natural attack on the aluminium.
          Sealing is carried out by immersing the component in near-boiling
          de-mineralised water, which, if required, can have small quantities of
          other chemicals, such as Nickel acetate or sodium dichromate, to
          further enhance corrosion resistance. Before sealing, immersion in
          specially formulated dyes can be carried out; the open pores soak up
          the dye, which will then be locked in by the sealing process. This can
          produce very attractive finishes but will depend on the thickness of
          the anodised film, as the thinner the film, the less dye will be
          absorbed.
        </p>
        <p>
          A major benefit of anodising is that because the oxide film is
          electrically resistant, the film is distributed across the component
          very evenly. As the film starts to grow, that area becomes more
          resistive until all other areas on the component have achieved the
          same thickness, thus equalising the relative resistivity and ensuring
          even growth over the whole component.
        </p>

        <h3>Chromic Acid Anodising</h3>

        <p>
          This method produces comparatively thin but dense oxide films that are
          usually dark grey in colour. They have very good corrosion resistance
          but are not really suited to subsequent dyeing as they are only 2-5
          microns thick. However, as they are thin, they do not affect close
          tolerances, so they are used extensively in the aerospace and defence
          industries. If left unsealed, they are an excellent base for
          subsequent painting operations as the first coat of paint soaks into
          the pores.
        </p>
        <p>
          The thin film also reduces the possibility of fatigue fracture on the
          component. Furthermore, unlike Sulphuric acid, Chromic acid protects
          rather than attacks aluminium. Any residual solution that may have
          been trapped in cracks, pores, or folds will not corrode the
          component. These two attributes make Chromic acid anodising ideal for
          critical components in the aerospace and defence sectors.
        </p>
        <p>
          A further benefit of the chromic process is that the chromic solution
          is extremely searching and will seep into even the smallest of flaws.
          As it is also a brownie/orange colour, there will be a stain apparent
          around the flaw, allowing the process to act as a non-destructive flaw
          detection method. This test is used extensively on defence-related
          products.
        </p>

        <h3>Thin Film Sulphuric Anodising</h3>

        <p>
          Considered a more 'environmentally friendly' process than chromic acid
          anodising, this process offered by Ashton & Moore Ltd. can mimic the
          thin anodised layer of the chromic process while using Sulphuric acid
          instead. Although it currently still requires the use of hexavalent
          chrome at very low levels for the final sealing operation, this
          process is already accepted as an alternative to chromic acid
          anodising in some areas of the aerospace sector (e.g., by Claverham)
          and is seriously being considered by others.
        </p>

        <h3>Sulphuric acid anodising</h3>
        <p>
          This method can produce much thicker films than the chromic process,
          and is generally used in corrosion resistance, general engineering, or
          decorative applications, Aluminium can be chemically or mechanically
          polished, satin etched or even left in its natural state prior to
          anodising. Thus, combined with the ability to accept dye, sulphuric
          anodised films offer a wide variety of visual finishes.
        </p>
        <p>
          Sulphuric anodising can be found in almost every walk of life wherever
          aluminium is used and examples of this process can be seen on domestic
          cookware, hand tools, fascias for computers and televisions,
          automotive trim etc.
        </p>
        <p>
          Sulphuric acid anodising may also be used to apply anodic films on
          Titanium. These films are relatively thin but prevent natural
          oxidation, provide an extra “Key” for subsequent coatings and can also
          be used to colour the surface of the component.
        </p>
        <h3>Tartaric sulphuric acid anodising</h3>
        <p>
          Like Thin film Sulphuric acid anodising this is considered a more
          “environmentally friendly” option to chromic acid anodising and is now
          the preferred option for Airbus and offered by Ashton and Moore Ltd.
          This is despite the fact that it currently still requires a hexavalent
          chromic seal (like Thin film sulphuric anodising), unless the surface
          is subsequently painted.
        </p>
        <h3>Masking</h3>
        <p>
          Exacting engineering requirements now require that specific areas of
          components should not be coated. Although masking for anodising is
          particularly challenging, Ashton & Moore has developed their own range
          of masking media to meet the most demanding requirements. When
          combined with the use of bungs and pre-cut masking media, etc. this
          permits us to achieve remarkably intricate, accurate and repeatable
          results on a production scale.
        </p>

        <h3>Ipcote</h3>

        <p>
          Jet engines, marine and power generation turbines, off shore oil
          installations, aircraft landing gear, are all examples of components
          operating in hostile environments and it is now recognised by many
          designers, users and specifiers that the application of high
          performance coatings can significantly improve the performance and
          life of these components.
        </p>
        <p>
          Ipcote/MCAC is a range of sacrificial aluminium ceramic coatings with
          high resistance to oxidation, salt and chemical corrosion as well as
          having exceptional tolerance to high temperatures and abrasion.
          Originally formulated to protect components at the “Hot end” of
          aircraft and marine turbine engines such as compressors/rotor blades
          and fuel injectors, these coatings have been found to be equally
          effective in other applications such as exhaust systems, heat
          exchangers and even landing gear.
        </p>
        <p>
          The corrosion resistance of these coatings has been found to be so
          good that they are now being specified by users as acceptable
          alternatives to cadmium plating for many applications and this has led
          to the development of several other products in the same range such as
          “Thincote” to allow thinner more controllable coatings and “Sealcote”
          which when applied on top of an Ipcote base will improve performance
          even further.
        </p>
        <p>
          Although the standard Ipcote range is water based and therefore
          environmentally friendly it does contain small amounts of Chrome,
          currently there is a solvent based chrome free version available, but
          Ashton & Moore are in partnership with the manufacturers of the Ipcote
          range, Indestructible Paints Ltd, to develop a water based chrome free
          version.
        </p>

        <h3>Dry Film Lubrication</h3>

        <p>
          Modern engineering applications require demanding performance
          characteristics, one of these is anti frictional coatings for
          components that for various reasons may not be lubricated by the more
          traditional oils and greases and in these circumstances materials such
          as PTFE, Graphite and molybdenum disulphide can be used. Ashton &
          Moore with it's wide experience of applying high performance paints
          are highly qualified to work with these materials and can offer a wide
          range of materials depending on whether simple lubrication or more
          complex load bearing anti frictional characteristics are required.
        </p>
      </div>
    ),
  },
  {
    title: "Non Destructive Testing",
    description:
      "Ashton & Moore Limited have extended their extensive range of Aerospace finishing services to include Non Destructive Testing.",
    linkTo: "/Testing",
    content: (
      <div>
        <p>
          Ashton & Moore Limited have extended their extensive range of
          Aerospace finishing services to include NON DESTRUCTIVE TESTING.
          Comprising Fluorescing Penetrant Dye and Magnetic Particle capability,
          this new equipment is housed in a purpose built unit on our Birmingham
          site which, being Midlands based, is ideally situated to service the
          whole of the country.
        </p>

        <p>
          Complementing our plating, painting and anodising capability, (see
          other pages), non destructive testing offers Aerospace, Defence and
          other specialist manufacturers the opportunity of “Single source
          procurement” bringing the benefits of reduced lead times, costs and
          logistical problems, although of course we also offer a “Stand alone”
          service for this and all our processes.
        </p>

        <p>
          Our NDT department offers magnetic particle and fluorescent dye
          penetrant services, having approvals from Nadcap plus an extensive
          range of aerospace and industrial specifiers (see “our approvals” page
          for detailed list.
        </p>

        <p>
          All of our NDT operatives are at least level II qualified and our MD,
          Dr Keith Tucker, holds level III status accepted by all the approval
          bodies that we work for .
        </p>

        <p>
          For further information about this and other benefits we can offer
          please contact our sales department on 08456 18 81 96 or e-mail
          ndt@ashton-moore.co.uk
        </p>
      </div>
    ),
  },
  {
    title: "Painting",
    description:
      "Capable of applying a paint finish to virtually any metallic and many non-metallic surfaces, our painting division is at the forefront of technology.",
    linkTo: "/Painting",
    content: (
      <div>
        <p>
          Capable of applying a paint finish to virtually any metallic and many
          non metallic surfaces, our painting division is at the forefront of
          technology.
        </p>

        <p>
          We specialise in epoxy, acrylic, polyurethane and PTFE coatings for
          the aerospace and defence industries.
        </p>

        <p>
          With our more specialised coatings we can offer infra red reflectivity
          (IRR) for military purposes, dry film lubrication or even high levels
          of corrosion protection coupled with resistance to temperatures in
          excess of 700o C.
        </p>

        <p>
          Should very high quality lacquered finishes on polished brass or
          stainless steel be required, we can provide them.
        </p>

        <p>
          Modern high performance products require high performance protection
          frequently from specially formulated products with specific
          performance attributes and painting is no exception.
        </p>

        <p>
          The aircraft industry for example requires paints which will resist
          fire, heat, wear, corrosion, as well as attack from fuels and
          hydraulic fluids as well as abrasion and impact from everyday use.
        </p>

        <p>
          Ashton & Moore's expertise in this field allows us to offer paint for
          almost any application whether a specific system is specified, as
          would be the case for aircraft or defence equipment, or whether we are
          offering solutions to companies who require a given performance but
          need advice on a system to attain that performance.
        </p>

        <p>
          Currently Ashton and Moore offer Epoxy, acrylic, polyurethane systems
          along with dry film lubricants such as PTFE and molybdenum disulphide,
          Intumescent paint for fire resistance, Infra red reflective paints for
          weaponry, high temperature/high corrosion resistant paint for severe
          applications and even paints which, in some applications, can be used
          as a replacement for cadmium plating.
        </p>

        <p>
          Exacting engineering requirements require that specific areas of
          components should not be coated. As with our other divisions, our
          painting division carries masking operatives experienced in a variety
          of masking media to ensure these requirements are met.
        </p>
      </div>
    ),
  },
  {
    title: "Conversion Coatings",
    description:
      "Although stainless and corrosion-resistant steels have a natural passive film, during the manufacturing processes minute particles of steel and non-ferrous metals are...",
    linkTo: "/Conversion-coatings",
    content: (
      <div>
        <h3>Alocrom</h3>
        <p>
          Alocrom (chromic conversion coating) can be applied either locally or
          all over via a dip process. It utilises hexavalent chrome (either
          chromic acid in the case of the dip Alocrom, or sodium/potassium
          dichromate in the case of local Alocrom) to convert the surface of
          aluminium components to greatly enhance their protection from
          subsequent corrosion. If applied all over Alocrom can be applied in a
          light (more electrically conductive) coating, or a heavier (more
          corrosion resistant) coating, but in either case is negligible in
          terms of thickness, as it is not a coating as such, but a chemical
          conversion of the surface. Typically it is applied to bonding points
          (eg. spot faces round bolt holes), under paint in a similar way to
          anodising, or to cover bare patches left by processing, such as left
          by jig marks.
        </p>

        <h3>Iridite NCP</h3>

        <p>
          Iridite NCP is one of the first hexavalent chrome alternatives to
          Alocrom (Specifically Alocrom 1000) which came on to the market
          offering an environmentally preferable REACH compliant method of
          converting the surface of commercial aluminium components to enhance
          corrosion protection. It is often used as a stand alone finish.
        </p>

        <h3>Phosphating</h3>
        <p>
          Phosphating is the application of a porous crystalline coating usually
          applied to ferrous based materials. The process is non electrolytic
          with the phosphate layer being produced by catalytic action between
          the component material and the Phosphating solution. This catalytic
          action producing an exceptionally strong bond of the phosphate layer
          to the component surface.
        </p>

        <p>
          The coating produced is crystalline and porous and forms a very good
          base for subsequent applications. As an undercoat for paints it
          dramatically improves adhesion of the painted layer, and the
          application of specialised oils and greases will enhance the corrosion
          performance of the component, or provide lubricity for subsequent
          manufacturing operations.
        </p>

        <p>
          Although most commonly applied to ferrous materials, it can also be
          applied to zinc or zinc plated bases where, prior to subsequent
          painting operations, both corrosion performance and adhesion are
          considerably improved.
        </p>

        <p>
          Ashton & Moore Ltd. offers four types of Phosphating, Zinc Phosphate
          which gives a finer grain with a wider range of thicknesses being
          achievable, or Manganese Phosphate which is limited to heavier films,
          The Manganese phosphate coating also has different crystalline
          structure to zinc phosphate, this structure is laminar rather than
          columnar, compressive, and imparts greater corrosion resistance and
          lubricity without the need for additional coating, although these can
          be specified if required. Manganese phosphate is particularly good for
          components where “wearing/running in” is required, and because it is a
          compressive, coating continues to offer lubricative properties for
          extended life.
        </p>

        <p>
          We also offer low temperature phosphate used on components sensitive
          to high temperature ( more than 45'C), such as those with swaged bands
          packed with grease and calcium modified phosphate which offers a super
          fine grain finish smoother than the more traditional Zinc phosphate.
          The calcium modified phosphate used in the automotive and defence
          industries has the additional advantage of being able to employ a
          zirconium based post rinse, rather than the traditional hexavalent
          chrome one, making it REACH compliant.
        </p>
      </div>
    ),
  },
  {
    title: "Plating",
    description:
      "Silver, like lead, also has excellent lubrication and anti-galling properties. Ashton & Moore offer deposits of pure silver without the addition of brightening...",
    linkTo: "/Plating",
    content: (
      <div>
        <p>
          As with all our departments, our plating lines are under strict
          laboratory control. We are plate Silver, lead and Indium.To complement
          these services, masking facilities control plating for tight
          tolerances, stress relieving and de-embrittlement are available as is
          the ability to apply all our plating processes to stainless and alloy
          steel components for which we also offer passivation to those areas do
          not require plating.
        </p>

        <h3>Lead Indium</h3>

        <p>
          Lead coatings on big end and other similar bearings has been used
          extensively for many years, used now mainly for overhaul and repair of
          older engines, pure lead is deposited on to the bronze bearing bush,
          not only is the lead highly lubricative and slow wearing, but because
          it is very soft and the coating is relatively thick, around
          0.005”/0.010” it absorbs and captures the minute metal particles worn
          from other parts of the engine preventing them from abrading other
          parts of the engine, this extends engine life dramatically.
        </p>

        <p>
          Unfortunately in this type of application Lead readily oxidises and
          wears away, to prevent this, a thin film of pure Indium is plated on
          top of the lead and the two metals are “fused” together by soaking in
          a near boiling oil bath. This fusion forms a lead indium alloy which
          does not oxidise, thereby lasting for many years.
        </p>
        <h3>Silver Plating</h3>

        <p>
          Silver, like lead, also has excellent lubrication and anti galling
          properties. Ashton & Moore offer deposits of pure silver without the
          addition of the brightening agents used for decorative purposes, such
          as table wear and jewellery.
        </p>

        <p>
          The even white matt coating produced is used extensively in high
          performance applications to prevent assemblies of similar materials
          from “welding” together thus allowing easy disassembly for servicing.
          Silver is particularly effective where threaded stainless steel
          components are assembled together in high temperature applications.
        </p>

        <h3>Cadmium Plating</h3>

        <p>
          As one of the few companies still licenced to provide this process
          Ashton and Moore Ltd. is capable of offering it as an extremely good
          corrosion inhibiting coating with a “sacrificial benefit” that allows
          it to continue working, even when scratched. Though these days it is
          limited by law to use only on aerospace products and some safety
          critical applications.
        </p>

        <p>
          As well as being conductive the cadmium plating has predictable torque
          characteristics, good lubricity and works well as either a final
          finish, or as a base for painting. It is usually passivated after
          application and any subsequent de-embrittlement to enhance its
          protective capabilities.
        </p>

        <h3>Masking</h3>

        <p>
          Exacting engineering requirements now require that specific areas of
          components should not be coated. Although masking for anodising is
          particularly challenging, Ashton & Moore has developed their own range
          of masking media to meet the most demanding requirements. When
          combined with the use of bungs and pre-cut masking media, etc. this
          permits us to achieve remarkably intricate, accurate and repeatable
          results on a production scale.
        </p>
      </div>
    ),
  },
];

export { sections, approvalComponents, news };
