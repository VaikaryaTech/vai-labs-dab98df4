import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  CheckCircle, 
  FlaskConical, 
  Shield, 
  FileCheck, 
  Factory, 
  Server, 
  Users, 
  TrendingUp, 
  Headphones,
  Beaker,
  Scale,
  FileText,
  Settings,
  Database,
  BookOpen,
  Search,
  AlertTriangle,
  Globe,
  Package,
  Wrench,
  MessageSquare,
  Award
} from "lucide-react";
import healthcarePharmaHero from "@/assets/healthcare-pharma-hero.jpg";

interface UseCase {
  name: string;
  title: string;
  frictionPoints: string;
  howKognixFits: string;
  valueDelivered: string;
}

interface Department {
  icon: React.ElementType;
  title: string;
  color: string;
  useCases: UseCase[];
}

const HealthcarePharma = () => {
  // Core Pharmaceutical Use Cases
  const coreUseCases: UseCase[] = [
    {
      name: "IP Clearance",
      title: "Intellectual Property (IP) Clearance and Patent Landscape Navigation",
      frictionPoints: "Meticulous, time-consuming cross-referencing of internal data against constantly evolving global patent claims to ensure freedom-to-operate. High risk of IP infringement.",
      howKognixFits: "Functions as an IP Risk Mitigator. Indexes internal project documentation and external patent databases. Instantly highlights relevant patent claims, providing concise summaries of conflicts and citing the exact relevant claim text.",
      valueDelivered: "Proactive Mitigation of IP Risk: Drastically reduces labor and potential legal exposure associated with IP clearance, securing the commercial and regulatory pathway for new API candidates."
    },
    {
      name: "Audit Preparation",
      title: "Proactive Audit Preparation and CAPA/Deviation Investigation",
      frictionPoints: "Rapid assembly of complex, interconnected GxP records (SOPs, deviation reports, raw data, training sign-offs) for audits and CAPA investigations. Manual retrieval is error-prone and causes delays.",
      howKognixFits: "Establishes a centralized QA query layer. Executes natural language searches (e.g., 'Provide all documentation... for personnel involved in the specific deviation...'). Rapidly synthesizes cross-functional data, linking directly to every validated source document (enforcing ALCOA+ principles).",
      valueDelivered: "Accelerated Deviation Closure and Enhanced Audit Readiness: Significantly reduces Mean Time to Resolution (TTR) for quality issues and markedly improves performance during regulatory inspections via immediate, auditable, and traceable GxP document access."
    },
    {
      name: "GxP Standards",
      title: "Global GxP Standard Comparison and SOP Harmonization",
      frictionPoints: "Continuous monitoring and comparison of region-specific guidelines (e.g., FDA vs. EudraLex) against internal Quality System Documents (QSDs) and SOPs across multiple international markets.",
      howKognixFits: "Ingests and semantically maps global GxP guidance documents against the internal controlled document library. Provides an instant gap analysis, highlighting precisely where current internal SOPs fall short of the most stringent global regulatory benchmark.",
      valueDelivered: "Enhanced Regulatory Consistency and Risk Reduction: Proactively minimizes the risk of critical quality deficiencies being cited during international regulatory audits by ensuring internal operational procedures are consistently harmonized with the current and most demanding global GxP standards."
    },
    {
      name: "Data Integrity",
      title: "Regulatory Submission Data Integrity Verification",
      frictionPoints: "Inconsistent or incomplete data synchronization between R&D, Clinical, and Quality teams, delaying submission compilation and compromising integrity. Manual verification is time-consuming and error-prone.",
      howKognixFits: "Executes an automated, semantic integrity check prior to submission. Queries draft filing documents (e.g., CTD sections) against validated source records (e.g., batch records) to confirm consistency. Generates a traceable report flagging discrepancies.",
      valueDelivered: "Reduced Submission Deficiencies and Accelerated Approval: Decreases the probability of regulatory agencies issuing Request for Information (RFI) letters related to internal data conflicts, thereby accelerating the overall Time to Approval."
    },
    {
      name: "eTMF Audit",
      title: "Retrieval and Audit of the Electronic Trial Master File (eTMF)",
      frictionPoints: "Audit staff struggle to rapidly locate specific, cross-functional document sets within the eTMF structure during monitoring visits or inspections to verify compliance.",
      howKognixFits: "Allows regulatory personnel to utilize conversational, contextual queries that span the TMF index (e.g., 'Retrieve all investigator meeting minutes...'). Instantly retrieves required documents, demonstrating GCP compliance.",
      valueDelivered: "Optimized Regulatory Access: Ensures the eTMF is continuously 'inspection-ready' by reducing the time needed for complex document retrieval from hours to mere seconds, enabling efficient evaluation of trial conduct and data quality."
    },
    {
      name: "Batch Verification",
      title: "Real-Time Batch Record and SOP Verification",
      frictionPoints: "GMP operators need immediate, unambiguous access to the current, correct version of SOPs and contextual historical batch record information on the shop floor to prevent operational errors. Delays introduce non-compliance risks.",
      howKognixFits: "Deployed as a secure, validated interface accessible on the shop floor. Operators can verbally or textually query highly specific technical instructions (e.g., 'What is the acceptable temperature range...?') and receive a source-grounded answer from the current Master Batch Record and version-controlled SOP.",
      valueDelivered: "Increased Operational Compliance and Reduction in Errors: Provides accurate, GxP-validated information precisely at the point of action, significantly enhancing adherence to mandatory procedures and securing the integrity of the digital batch audit trail."
    },
    {
      name: "Material Traceability",
      title: "Automated Material Traceability and Auditable Chain-of-Custody",
      frictionPoints: "Linking disparate information—from raw material receipt to final product packaging—across systems (LIMS, ERP, MES) to verify the chain-of-custody for regulatory bodies.",
      howKognixFits: "Indexes all documentation containing unique material identifiers (COAs, receiving logs, production records). The system semantically connects these documents, enabling a synthesized, auditable reconstruction of a lot number's entire history and chain-of-custody.",
      valueDelivered: "Enhanced Product Integrity and Rapid Recall Capability: Streamlines complex documentation, reducing the time required for root cause analysis and mass serialization/traceability checks, reinforcing compliance with global drug security acts."
    },
    {
      name: "Global Distribution",
      title: "Global Distribution Documentation and Customs Compliance",
      frictionPoints: "Supply Chain (SC) teams need rapid, accurate access to country-specific regulatory certificates, market authorization data, and precise shipping documentation. Managing version control across divergent international markets creates significant friction.",
      howKognixFits: "Creates a centralized SC knowledge hub, indexed by product, destination, and regulatory status. Synthesizes current regional importation requirements and instantly retrieves the necessary, verified Certificate of Analysis (CoA) or customs documentation.",
      valueDelivered: "Reduced Logistics and Customs Friction: Minimizes the risk of critical API shipments being delayed or detained due to reliance on outdated, incorrect, or missing documentation, thus ensuring smooth, compliant global supply."
    },
    {
      name: "GxP Systems",
      title: "GxP System Troubleshooting and Knowledge Management",
      frictionPoints: "IT support personnel spend excessive time navigating and synthesizing information across vast libraries of detailed validation reports (IQ/OQ/PQ), system architecture guides, and application SOPs when responding to a technical incident.",
      howKognixFits: "Integrated as the primary knowledge engine for the IT Service Desk. Grounds all troubleshooting guidance in controlled, validated GxP system documentation. Answers queries like: 'What are the approved recovery steps for a failure...?'",
      valueDelivered: "Accelerated Mean Time to Resolution (MTTR): Reduces system downtime for business-critical validated systems by providing immediate, technically accurate solutions based on verified documentation, maintaining the qualified status of the GxP infrastructure."
    },
    {
      name: "Training Compliance",
      title: "GxP Training Compliance and Policy Knowledge Dissemination",
      frictionPoints: "Mandated verifiable records of staff qualifications and GxP training. Employees struggle to interpret complex and voluminous HR policies, impacting consistent application.",
      howKognixFits: "Deploys as a personalized internal policy concierge. Answers natural language queries on HR policies, linking to the official document. For GxP, it provides immediate confirmation of required training status based on role and location.",
      valueDelivered: "Improved Employee Compliance and Knowledge Retention: Provides instant, context-aware access to critical GxP training requirements. Streamlines access to HR information, supporting a positive Employee Value Proposition (EVP)."
    },
    {
      name: "Technical Data",
      title: "Compliant Technical Data Provisioning for Strategic Partners",
      frictionPoints: "Sales representatives require rapid access to specific API specifications, regulatory filing status, and quality summaries for customer due diligence. Sharing must be secure, timely, and compliant with internal data governance.",
      howKognixFits: "Implements a Regulatory Shielding function. Sales teams query controlled documents to generate verified, synthesized, compliant summary statements (e.g., shelf life statement) suitable for external sharing, without granting access to internal source documents.",
      valueDelivered: "Accelerated Sales Cycle and Enhanced Partner Trust: Transforms highly regulated technical knowledge into a competitive differentiator by enabling fast, accurate, and compliant technical communication."
    },
    {
      name: "Technical Inquiry",
      title: "Technical Inquiry Resolution and Service Excellence",
      frictionPoints: "Customer Support fields complex, highly technical inquiries requiring access to siloed information across R&D, QA, and Regulatory dossiers, leading to long resolution times and high escalation rates.",
      howKognixFits: "Centralizes the entire technical knowledge base (R&D reports, COAs, stability data, market authorization documents). Agents receive instant, contextual answers rigorously grounded in validated technical sources, resolving complex queries without escalation.",
      valueDelivered: "Increased First-Call Resolution (FCR) and Customer Satisfaction: Significantly reduces the organizational burden of escalating technical queries, delivering a superior, faster, and more professional technical service to global partners."
    }
  ];

  // Department-based use cases
  const departments: Department[] = [
    {
      icon: FlaskConical,
      title: "R&D and Innovation",
      color: "text-blue-500",
      useCases: [
        {
          name: "Research Efficiency",
          title: "Historical Research Knowledge Retrieval",
          frictionPoints: "R&D teams invest significant time pursuing research paths already explored or rejected in proprietary historical projects. Locating specific experimental details within massive archives relies on inefficient keyword matching.",
          howKognixFits: "Semantic search and retrieval across historical R&D reports, formulation summaries, patent filings, and experimental data logs. Researchers query conceptually (e.g., 'emulsifier stability issues at 70°C in highly acidic solutions') rather than by keyword.",
          valueDelivered: "Accelerated design-of-experiment (DoE) phase by proactively identifying previously solved technical constraints, reducing redundant effort and accelerating time-to-market."
        },
        {
          name: "Material Benchmarking",
          title: "Automated Performance Data Extraction",
          frictionPoints: "Scientists need to extract precise performance metrics (thermal degradation temperature, crystallization yield, toxicity levels) from thousands of archived Technical Data Sheets, safety reports, or unstructured Excel/PDF reports.",
          howKognixFits: "Context-aware extraction functionality systematically pulls specific, named numerical or categorical data points (e.g., 'flash point', 'viscosity at 25°C') from ingested unstructured documents.",
          valueDelivered: "Automated material benchmarking and selection, significantly reducing manual effort required to compile performance data for modeling and feasibility studies."
        },
        {
          name: "Knowledge Preservation",
          title: "Expert Knowledge Transfer and Retention",
          frictionPoints: "Retirement or transition of senior formulation scientists represents significant loss of proprietary knowledge concerning complex synthetic pathways or material handling subtleties existing in fragmented internal memos and presentations.",
          howKognixFits: "Ingestion of expert reports, retirement interview transcripts, and proprietary knowledge transfer documentation. Interactive Q&A interface preserves critical operational insight allowing junior scientists to query past decisions and rationales.",
          valueDelivered: "Preserves critical institutional knowledge, mitigating employee turnover impact and ensuring consistency in complex formulation decision-making."
        },
        {
          name: "IP Defense",
          title: "Patent Filing Support and IP Defense",
          frictionPoints: "Responding to patent office examination reports requires swiftly retrieving specific, cited experimental proof points, trial logs, and dated data sheets to substantiate claims of novelty and utility.",
          howKognixFits: "Instant, semantically grounded retrieval of specific trial logs and data sheets linked to formulation versions and IP disclosures. The system cites the exact source document for every piece of data retrieved.",
          valueDelivered: "Strengthens IP defense and accelerates patent filing response speed, ensuring timely adherence to legal submission deadlines."
        },
        {
          name: "Regulatory Integration",
          title: "Regulatory Change Impact Assessment",
          frictionPoints: "The regulatory landscape for specialty chemicals involves numerous, highly technical guidance documents. Interpreting how these affect ongoing research protocols requires significant manual legal review.",
          howKognixFits: "Ingestion of external regulatory documents (CDE guidance, regional chemical control laws). Auditable summarization and Q&A provides researchers with concise, cited answers regarding specific restrictions or testing requirements.",
          valueDelivered: "Reduces regulatory risk exposure early in R&D pipeline, allowing researchers to rapidly adjust protocols to align with new compliance directives."
        },
        {
          name: "Cross-Team Communication",
          title: "Technical-to-Marketing Translation",
          frictionPoints: "Communication between R&D (using highly technical chemical nomenclature) and Marketing/Sales (requiring accessible descriptions) can lead to ambiguity or misrepresentation of product properties.",
          howKognixFits: "Controlled document generation synthesizes factual product summaries grounded strictly in official R&D test reports and technical specifications, ensuring consistent technical vocabulary.",
          valueDelivered: "Reduces internal communication ambiguity and ensures external marketing claims are verifiable and accurately aligned with R&D findings."
        }
      ]
    },
    {
      icon: Shield,
      title: "Quality Assurance and Control",
      color: "text-green-500",
      useCases: [
        {
          name: "Maintenance Compliance",
          title: "Equipment Calibration and Maintenance Documentation",
          frictionPoints: "Audit findings often cite insufficient implementation of preventative maintenance, including incorrect equipment calibration. QA needs to quickly prove maintenance schedule was correctly executed prior to production runs.",
          howKognixFits: "Ingestion and indexing of equipment maintenance logs, calibration certificates, and preventative maintenance schedules (often in PDF or scanned formats). QA personnel retrieve documentation instantly by querying specific equipment ID and date range.",
          valueDelivered: "Ensures operational compliance, streamlines maintenance-related documentation verification, and reduces equipment-related documentation issues cited during audits."
        },
        {
          name: "Supplier Qualification",
          title: "Supplier Evaluation and Material Conformance",
          frictionPoints: "Effective evaluation of suppliers for raw materials is a common pain point and top non-conformity area. Manually comparing vendor CoAs or material specifications against internal quality standards is time-consuming.",
          howKognixFits: "Semantic search across indexed supplier CoAs, material specifications, and internal historical supplier performance reports. QA staff instantly query complex comparisons (e.g., 'Find all suppliers whose lead time exceeded 10 days AND whose material specification exceeded tolerance for moisture content').",
          valueDelivered: "Improves supplier qualification efficiency, enabling faster identification of reliable partners and reducing material non-conformance by flagging deviations proactively."
        },
        {
          name: "CAPA Resolution",
          title: "Historical CAPA and NCR Precedent Search",
          frictionPoints: "When new quality failures occur, significant time is spent searching for historical CAPA or NCR documentation to find precedents or effective resolutions for analogous failure modes.",
          howKognixFits: "Semantic search across structured CAPA and NCR repository. QA staff query context and mechanism of failure rather than keyword matching to retrieve relevant past investigations, resolution documents, and root cause analyses.",
          valueDelivered: "Accelerates CAPA closure time by immediately providing cited, proven solutions for previously encountered quality issues, reducing internal investigation cycles."
        },
        {
          name: "QA Training",
          title: "Quality Personnel Knowledge Development",
          frictionPoints: "Training new QA personnel on complexity of chemical documentation, version tracking protocols, and company-specific QMS procedures is extensive, leading to slow ramp-up times.",
          howKognixFits: "Interactive training tool built upon QMS manuals, process flowcharts, and historical audit findings. New hires query scenarios (e.g., 'What is the procedure for document retirement?') and receive cited answers.",
          valueDelivered: "Accelerates QC staff proficiency and knowledge retention, reducing dependency on senior staff for basic training queries."
        }
      ]
    },
    {
      icon: FileCheck,
      title: "Regulatory Affairs and Compliance",
      color: "text-purple-500",
      useCases: [
        {
          name: "SDS Management",
          title: "Safety Data Sheet Processing and Indexing",
          frictionPoints: "Safety Data Sheets (SDSs) are lengthy, technical documents. Manually reviewing, extracting, and indexing key data points (GHS hazards, PPE, disposal codes) from vendor SDS PDFs into internal EHS systems is labor-intensive and costly.",
          howKognixFits: "Context-aware extraction systematically pulls standardized data fields (e.g., Section 2: Hazard Identification, Section 8: Exposure Controls/PPE) from ingested SDS documents.",
          valueDelivered: "Eliminates costly hours lost to manual data retyping and indexing, shifting EHS professional resources from clerical entry toward high-value risk assessment and compliance analysis."
        },
        {
          name: "Multi-Jurisdiction Compliance",
          title: "Cross-Jurisdictional Regulatory Comparison",
          frictionPoints: "Specialty chemicals require compliance across international markets (EU REACH, US OSHA, regional regulations). Comparing regulatory requirements across multiple global jurisdictions is complex and time-intensive.",
          howKognixFits: "Ingestion of regional regulatory summaries and legal texts. Semantic retrieval and summarization highlights specific cross-jurisdictional deviations for a given chemical or product category.",
          valueDelivered: "Accelerates global market access and compliance planning by providing rapid, cited verification of regulatory differences, avoiding regulatory fines associated with non-compliant product documentation."
        },
        {
          name: "Regulatory Impact",
          title: "New Regulation Impact Assessment",
          frictionPoints: "When new external regulation is published (e.g., updated restriction on a solvent), compliance team must immediately assess which active product dossiers, raw material inventory, or formulation processes are affected.",
          howKognixFits: "Semantic searching across all active product dossiers, formulation lists, and supplier material data based on key concepts or chemical identifiers mentioned in the new regulation.",
          valueDelivered: "Dramatically improves organizational agility in responding to regulatory changes, enabling proactive adjustments to formulation, sourcing, or labeling before enforcement date."
        },
        {
          name: "Filing Precedents",
          title: "Historical Filing Data Reuse",
          frictionPoints: "Expediting new chemical registrations or product variants requires analysts to quickly locate and reuse historical data and precedents from past, similar regulatory filings, hindered by dispersed or poorly indexed archives.",
          howKognixFits: "Semantic search across archived regulatory filing repository, enabling retrieval based on chemical function, application, or regulatory agency, regardless of document title or filing date.",
          valueDelivered: "Reduces research time required for new submissions by providing immediate access to successful historical submission strategies and supporting data."
        },
        {
          name: "Internal Compliance Queries",
          title: "Stakeholder Compliance Information Synthesis",
          frictionPoints: "Internal stakeholders (Sales, R&D) frequently request compliance information such as 'What are the current import restrictions on this specialty solvent in Country X?' Analysts must manually synthesize information from complex legal documents.",
          howKognixFits: "Generative responses synthesized strictly from retrieved legal texts, official guidance, and internal compliance documents. System provides concise answer, cited back to regulatory document version.",
          valueDelivered: "Ensures internal stakeholders receive accurate, verifiable compliance information, preventing circulation of misinformation and managing internal expectations about product marketability."
        }
      ]
    },
    {
      icon: Factory,
      title: "Manufacturing and Operations",
      color: "text-orange-500",
      useCases: [
        {
          name: "Shop Floor SOPs",
          title: "Real-Time SOP and Safety Protocol Access",
          frictionPoints: "On the shop floor, inability of production staff to instantly locate the correct, current SOP or safety protocol can lead to significant risk of error, rework, and safety incidents.",
          howKognixFits: "API integration into manufacturing execution system (MES) terminals or tablets. Operators use natural language queries (e.g., 'How do I perform a clean-in-place cycle on Reactor 4?'). System retrieves cited, actionable steps from latest approved SOP version.",
          valueDelivered: "Ensures strict adherence to correct, version-controlled procedures, improving product consistency, quality control, and overall workplace safety."
        },
        {
          name: "Formula Version Control",
          title: "Production Formula Verification",
          frictionPoints: "Chemical companies rely on complex formulas, and ensuring the correct, current version is used for production batches is vital. Errors lead to high-cost rework or scrapping of entire batches.",
          howKognixFits: "Strict version control and permissioned access to formulation documents, integrated with MES. System confirms formula version linked to batch is the latest approved formulation sheet through auditable retrieval.",
          valueDelivered: "Minimizes high-cost rework and scrapping of batches due to formula version errors, ensuring product consistency."
        },
        {
          name: "Equipment Troubleshooting",
          title: "Technical Equipment Knowledge Management",
          frictionPoints: "Complex manufacturing equipment requires deep technical expertise for troubleshooting and maintenance. High reliance on experienced staff creates bottlenecks when equipment malfunctions, slowing MTTR.",
          howKognixFits: "Interactive Q&A system trained on digitized machine manuals, internal maintenance protocols, troubleshooting flowcharts, and historical maintenance tickets indexed by equipment ID.",
          valueDelivered: "Speeds up repair time by providing immediate, cited diagnostic guidance and reduces operational reliance on physical presence of specific expert knowledge."
        },
        {
          name: "Shift Communication",
          title: "Cross-Shift Risk and Safety Communication",
          frictionPoints: "Lack of consistency in communicating risk, process changes, and safety procedures across different production shifts can lead to operational deviations and safety gaps.",
          howKognixFits: "Controlled generation of standardized summaries of key safety risks, policy changes, and procedural updates for daily shift briefings. Content grounded strictly in current EHS policies and change logs.",
          valueDelivered: "Enhances uniform safety culture, ensures communication clarity, and reinforces adherence to standard requirements."
        },
        {
          name: "Factory Onboarding",
          title: "Production Personnel Training",
          frictionPoints: "Training new factory personnel takes significant time due to technical complexity of process controls, hazard analysis, and specialized equipment operation.",
          howKognixFits: "Conversational training interface built on indexed training manuals, safety policy transcripts, and digital SOPs. New hires simulate complex process questions and receive cited instructional content.",
          valueDelivered: "Accelerates onboarding time for new personnel, facilitating quicker proficiency in standardized procedures and reducing learning curve."
        }
      ]
    },
    {
      icon: Server,
      title: "IT and Global Business Services (GBS)",
      color: "text-cyan-500",
      useCases: [
        {
          name: "Policy Access",
          title: "Regional Policy Compliance for Global Operations",
          frictionPoints: "GBS Shared Service Centers supporting multiple countries require employees to manage business processes compliant with highly fragmented, local policies. Instant, correct access to region-specific policies is essential.",
          howKognixFits: "Centralized ingestion of all global and local GBS/IT policies. Retrieval enforced by RBAC, ensuring GBS employee querying expense policy receives version specific to their assigned region and role.",
          valueDelivered: "Enhances efficiency and accuracy of global GBS hub operations by guaranteeing consistent, localized application of internal policies."
        },
        {
          name: "Policy Attestation",
          title: "IT Policy Acknowledgment Tracking",
          frictionPoints: "Proving that diverse, multi-country workforce has reviewed and acknowledged critical IT policies (data handling, security protocols) is difficult to track manually and vital for audit readiness.",
          howKognixFits: "Tracking user interaction and mandatory retrieval of IT security policies within the platform, generating an immutable, auditable record of acknowledgment linked to user accounts.",
          valueDelivered: "Simplifies compliance reporting for data governance standards and supports rapid audit preparation by demonstrating policy attestation."
        },
        {
          name: "System Documentation",
          title: "IT Project Documentation Standardization",
          frictionPoints: "New system deployments (ERP or LIMS upgrades) often require extensive documentation that can be inconsistent or incomplete, slowing adoption and risking future maintenance.",
          howKognixFits: "Retrieval of standardized architectural patterns, project documentation templates, and detailed technical reports from previous successful deployments.",
          valueDelivered: "Standardizes quality and completeness of IT project documentation, accelerating deployment cycles and reducing future operational debt."
        },
        {
          name: "Service Desk",
          title: "IT Service Desk Knowledge Acceleration",
          frictionPoints: "IT service desk agents struggle with inefficient operations due to scattered internal system manuals, legacy release notes, and complex troubleshooting documentation stored across disparate wikis and shared drives.",
          howKognixFits: "Semantic indexing of all technical IT documentation (including complex configuration guides and API specifications), enabling agents to query system errors and retrieve cited solutions instantly.",
          valueDelivered: "Accelerates MTTR for internal tickets by providing immediate access to technical solutions, improving end-user satisfaction."
        },
        {
          name: "Technical Translation",
          title: "Technical-to-Business Communication",
          frictionPoints: "Communicating complex system outages, planned maintenance, or technical updates (e.g., ERP module changes) clearly to non-technical business users leads to confusion and unnecessary support calls.",
          howKognixFits: "Generative summarization of technical release notes or incident reports into concise, cited business impact statements, tailored for non-technical audience.",
          valueDelivered: "Improves internal communication effectiveness and reduces user confusion by translating technical complexity into actionable business context."
        },
        {
          name: "GBS Onboarding",
          title: "GBS Staff Process Training",
          frictionPoints: "New GBS staff require rapid proficiency in numerous finance, HR, and procurement SOPs specific to the global service model. Traditional text-heavy training is inefficient.",
          howKognixFits: "Interactive Q&A assistant built on GBS standard operating manuals and process guides, allowing staff to query specific scenarios (e.g., 'What is the procedure for a high-value purchase order reversal?').",
          valueDelivered: "Reduces time and effort required for GBS induction and ensures standardized level of process knowledge across the center."
        },
        {
          name: "Audit Documentation",
          title: "External IT Audit Preparedness",
          frictionPoints: "External financial or IT auditors frequently request documentation related to system validation, change management procedures, and disaster recovery plans on short notice.",
          howKognixFits: "Instant, permissioned retrieval of version-controlled system validation reports, Change Request documentation, and security policy manuals, linked via semantic tags.",
          valueDelivered: "Improves transparency and speed during external IT compliance reviews by ensuring all requested documentation is immediately available and cited."
        }
      ]
    },
    {
      icon: Users,
      title: "Human Resources (HR)",
      color: "text-pink-500",
      useCases: [
        {
          name: "Safety Policy Access",
          title: "Employee Safety Training and Policy Access",
          frictionPoints: "Companies must ensure all employees have readily accessible safety training and policy documents, particularly mandatory Hazardous Chemical Risk/Right-to-Know Policy. Employees must find this information quickly.",
          howKognixFits: "Centralized index of all HR policies, mandatory safety manuals, and associated training materials. Employees use simple, natural language search (e.g., 'What PPE do I need for X chemical?') for instant, cited answers.",
          valueDelivered: "Ensures rapid access to critical safety information, supporting compliance with mandatory disclosure laws and enhancing overall employee safety awareness."
        },
        {
          name: "Policy Attestation",
          title: "Compliance Policy Acknowledgment Tracking",
          frictionPoints: "In regulated manufacturing, HR must maintain auditable trail proving employees and contractors have reviewed, understood, and acknowledged critical safety, ethical, or compliance policies.",
          howKognixFits: "By requiring mandatory retrieval and interaction with critical documents through the platform, system generates auditable record of user engagement, providing necessary data for policy attestation.",
          valueDelivered: "Facilitates compliance attestation during internal and external audits by providing clear evidence of policy distribution and engagement."
        },
        {
          name: "Labor Law Compliance",
          title: "Multi-Jurisdictional Labor Law Management",
          frictionPoints: "HR staff struggle to maintain and compare complex, local labor laws (statutory leave policies, specific contract requirements) across different states and globally, leading to potential legal missteps.",
          howKognixFits: "Semantic search and comparison functionality applied to indexed labor contracts, local legal summaries, and internal policy manuals, highlighting divergences in policy application.",
          valueDelivered: "Ensures consistent, accurate application of employment law, significantly reducing legal and compliance risk associated with regional variances."
        },
        {
          name: "HR Case Resolution",
          title: "Employee Grievance and Disciplinary Precedent Search",
          frictionPoints: "Resolving nuanced employee grievances, disciplinary actions, or complex benefit questions requires synthesizing information from multiple legal contracts, benefit plan documents, and historical disciplinary precedent.",
          howKognixFits: "Secure, permissioned access for HR specialists to internal legal/HR precedent documentation. Semantic search enables rapid retrieval of analogous case facts, decisions, and documentation.",
          valueDelivered: "Ensures objectivity, fairness, and consistency in high-stakes HR decisions by grounding case resolution in historical, cited organizational precedent."
        },
        {
          name: "Employee Onboarding",
          title: "New Hire Policy Orientation",
          frictionPoints: "Onboarding processes rely heavily on manual document presentation and policy review, often leading to information overload and low retention of key policy details by new hires.",
          howKognixFits: "Interactive Q&A for new hires, covering common procedural questions related to benefits, compliance training, expense reporting, and Code of Conduct, all grounded in official HR documents.",
          valueDelivered: "Accelerates new employee integration and policy comprehension, reducing time HR generalists spend answering repetitive policy questions."
        },
        {
          name: "Policy Analytics",
          title: "HR Policy Usage Analytics",
          frictionPoints: "HR management lacks data on which policies are most frequently accessed, confusing, or subject to employee questions, making it difficult to prioritize policy refinement or communication efforts.",
          howKognixFits: "Retrieval and summarization of policy usage logs and semantic search trends data. This data indicates knowledge gaps and areas of high policy complexity.",
          valueDelivered: "Provides data-driven insights for policy refinement and targeted communication planning, improving clarity and effectiveness of HR documentation."
        }
      ]
    },
    {
      icon: TrendingUp,
      title: "Sales and Market Development",
      color: "text-emerald-500",
      useCases: [
        {
          name: "Technical Consultation",
          title: "Instant Technical Product Knowledge Access",
          frictionPoints: "Sales professionals encounter challenges navigating complex technical product requirements and need instant access to deep product specifications and internal testing data during client interactions.",
          howKognixFits: "Centralized index of all Technical Data Sheets (TDS), internal test reports, application guides, and formulation compatibility matrices. System acts as instant, factual technical consultant.",
          valueDelivered: "Improves sales effectiveness and velocity by enabling instant, factual technical consultation and enhancing client trust in highly competitive market."
        },
        {
          name: "Claim Compliance",
          title: "Compliant Product Performance Claims",
          frictionPoints: "Due to complexity of chemical properties and application, sales personnel risk making non-compliant, exaggerated, or inaccurate product performance claims, leading to legal and reputational risk.",
          howKognixFits: "Implementation of guardrails ensuring all generative summaries and technical responses provided to sales staff are strictly grounded in and cite official, version-controlled product specification documents.",
          valueDelivered: "Mitigates legal and reputational risk associated with exaggerated or false claims by enforcing factual citation of approved data."
        },
        {
          name: "Competitive Positioning",
          title: "Product Differentiation Support",
          frictionPoints: "Specialty chemicals marketplace is competitive, requiring sales teams to rapidly articulate precise product differentiation against competitors. This requires synthesizing technical performance data with market intelligence.",
          howKognixFits: "Controlled document generation synthesizes summaries contrasting products against indexed competitive analysis reports, citing internal performance proof points and R&D findings.",
          valueDelivered: "Provides high-impact, fact-based talking points for market positioning, directly mitigating challenge of differentiation."
        },
        {
          name: "RFP Response",
          title: "Rapid RFP Documentation Assembly",
          frictionPoints: "Responding to Requests for Proposals (RFPs) demands urgent location and submission of specific regulatory compliance documents, sustainability certifications, or proprietary technical safety guarantees.",
          howKognixFits: "Context-aware extraction functionality instantly pulls required certifications (ISO certifications, regional registration numbers) from compliance documents, integrating them directly into proposal drafting workflow.",
          valueDelivered: "Accelerates RFP response cycle, improving ability to meet strict deadlines and potentially improving win rates due to timeliness."
        },
        {
          name: "Pre-Sales Content",
          title: "Pre-Sales Briefing Material Generation",
          frictionPoints: "Creating consistent, high-quality pre-sales briefing materials and white papers requires sourcing data from technical specifications, market reports, and internal expert opinions.",
          howKognixFits: "Controlled content generation (executive summaries, technical overviews) based only on retrieved, cited technical and market intelligence reports.",
          valueDelivered: "Standardizes quality and factual basis of all pre-sales collateral, enhancing brand consistency and authority."
        },
        {
          name: "Sales Training",
          title: "New Sales Representative Technical Training",
          frictionPoints: "New sales representatives struggle to quickly master the technically diverse product portfolio—from crop solutions to industrial lubricant additives—requiring in-depth understanding of application and chemical principles.",
          howKognixFits: "Interactive Q&A platform simulating technical customer queries (troubleshooting scenarios, compatibility questions), trained exclusively on application guides and technical manuals.",
          valueDelivered: "Reduces training time and accelerates product knowledge acquisition, shortening ramp-up period for specialized chemical sales staff."
        },
        {
          name: "Contract Terms",
          title: "Commercial Terms and Pricing Retrieval",
          frictionPoints: "Tracking evolution of commercial terms, regional pricing schedules, and specific liability clauses across numerous complex, fragmented customer contracts is challenging, leading to potential financial errors.",
          howKognixFits: "Semantic search across all archived commercial contracts, pricing agreements, and legal addenda. Sales staff quickly retrieve latest applicable terms for specific client/product combination.",
          valueDelivered: "Ensures sales quotes and agreements adhere precisely to current financial and legal terms, preventing revenue leakage or contractual disputes."
        }
      ]
    },
    {
      icon: Headphones,
      title: "Customer Support and Technical Service",
      color: "text-red-500",
      useCases: [
        {
          name: "Technical Troubleshooting",
          title: "Complex Technical Inquiry Resolution",
          frictionPoints: "High Average Handle Time (AHT) for complex technical inquiries involving chemical incompatibility, incorrect dosing, or raw material variability. Agents need highly specific troubleshooting steps instantly.",
          howKognixFits: "Semantic search across technical service bulletins, formulation guides, application manuals, and resolved case histories to instantly retrieve cited, step-by-step diagnostic procedures for specific failure modes.",
          valueDelivered: "Accelerates technical service resolution, directly improving customer satisfaction and technical service metrics by reducing AHT."
        },
        {
          name: "Data Extraction",
          title: "Real-Time Technical Data Retrieval",
          frictionPoints: "Agents often need to rapidly extract obscure stability data, detailed chemical composition limits, or safety precautions while actively engaged in customer calls. Searching large PDFs manually is inefficient.",
          howKognixFits: "Instant, semantic retrieval of specific data points from lengthy Technical Data Sheets (TDS) or stability reports, using context-aware extraction capabilities.",
          valueDelivered: "Enhances agent professionalism and speed of service, leading to quicker call resolution and higher quality customer experience."
        },
        {
          name: "Advice Consistency",
          title: "Standardized Application Advice",
          frictionPoints: "Inconsistent or erroneous application advice provided by different support agents regarding complex specialty chemical applications can lead to customer product failure and loss of trust.",
          howKognixFits: "Enforced grounding of all technical advice in official, version-controlled Product Application Manuals and formulation guidelines. System only provides answers based on approved documentation.",
          valueDelivered: "Ensures uniform, high-quality technical support guidance, safeguarding product integrity and customer success."
        },
        {
          name: "Storage Guidance",
          title: "Environmental Storage and Handling Advice",
          frictionPoints: "Customers require accurate storage and handling advice tailored to their specific local environmental conditions (temperature, humidity, light exposure) to prevent product degradation.",
          howKognixFits: "Retrieval of specific product stability documentation relevant to external environmental factors and cross-referencing against geographical data indexed in the system.",
          valueDelivered: "Reduces product degradation post-sale caused by improper handling, minimizing customer complaints and warranty claims."
        },
        {
          name: "Case Documentation",
          title: "Automated Case Resolution Documentation",
          frictionPoints: "Documenting resolution of complex troubleshooting cases accurately and thoroughly for future reference relies on manual agent summary, resulting in inconsistent quality in internal knowledge base.",
          howKognixFits: "Generative tool assists agents by summarizing the issue, synthesizing retrieved context (diagnostic steps used), and structuring final resolution into standardized case note format.",
          valueDelivered: "Improves quality and future utility of internal technical knowledge base, making subsequent troubleshooting more efficient."
        },
        {
          name: "Support Training",
          title: "Technical Support Agent Training",
          frictionPoints: "Training new technical support agents on myriad of specific failure modes and troubleshooting pathways for diverse product lines is a lengthy, critical process.",
          howKognixFits: "Simulation environment allowing agents to practice querying complex failure scenarios against the knowledge base, providing instant, cited feedback on correct diagnostic paths.",
          valueDelivered: "Reduces ramp-up time for specialized technical support staff, accelerating their readiness to handle complex inquiries."
        },
        {
          name: "Claims Processing",
          title: "Warranty and Liability Clause Retrieval",
          frictionPoints: "When handling product defect claims, customer support needs to quickly locate and summarize specific warranty and liability clauses in customer contracts or general terms of sale.",
          howKognixFits: "Semantic search across archived customer contracts, legal agreements, and general terms and conditions, utilizing permissioned retrieval to ensure access is limited to authorized personnel.",
          valueDelivered: "Ensures claims are processed accurately and according to relevant contractual terms, maintaining legal compliance."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(260_60%_25%/0.2),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/business-applications" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Enterprise Application Areas
          </Link>
          
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Healthcare & Pharmaceuticals
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Transform pharmaceutical operations with AI-powered solutions across R&D, Quality, Regulatory, 
              Manufacturing, IT, HR, Sales, and Customer Support—delivering measurable value at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="relative h-64 overflow-hidden">
        <img 
          src={healthcarePharmaHero} 
          alt="Healthcare and Pharmaceuticals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </section>

      {/* Core Pharmaceutical Use Cases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Core Pharmaceutical Operations
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Enterprise-wide solutions addressing critical friction points in pharmaceutical manufacturing, 
              compliance, and operations with measurable, conservative value delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreUseCases.map((useCase, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary group"
              >
                <div className="mb-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                    {useCase.name}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {useCase.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Friction Points</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {useCase.frictionPoints}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-medium text-primary uppercase mb-1">How KOGNIX Fits</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {useCase.howKognixFits}
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2 pt-3 border-t border-border/50">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-primary leading-relaxed">
                      {useCase.valueDelivered}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department-Based Use Cases */}
      {departments.map((department, deptIndex) => (
        <section key={deptIndex} className={`py-24 ${deptIndex % 2 === 0 ? 'bg-muted/30' : 'bg-background'}`}>
          <div className="container mx-auto px-6">
            {/* Department Header */}
            <div className="flex items-center gap-4 mb-12">
              <department.icon className={`h-12 w-12 ${department.color} flex-shrink-0`} />
              <div>
                <h2 className="text-3xl font-bold">{department.title}</h2>
                <p className="text-muted-foreground mt-1">
                  {department.useCases.length} specialized use cases
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {department.useCases.map((useCase, useCaseIndex) => (
                <Card 
                  key={useCaseIndex}
                  className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary group"
                >
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                      {useCase.name}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {useCase.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Friction Points</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {useCase.frictionPoints}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-xs font-medium text-primary uppercase mb-1">How KOGNIX Fits</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {useCase.howKognixFits}
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-2 pt-3 border-t border-border/50">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-primary leading-relaxed">
                        {useCase.valueDelivered}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Transform Your Pharmaceutical Operations?
            </h2>
            <p className="text-xl text-muted-foreground">
              See how KOGNIX can accelerate innovation, ensure compliance, and optimize your entire value chain across all departments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-demo">
                <Button size="lg" variant="hero">
                  Book a Demo
                </Button>
              </Link>
              <Link to="/product">
                <Button size="lg" variant="outline">
                  Learn More About KOGNIX
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcarePharma;
