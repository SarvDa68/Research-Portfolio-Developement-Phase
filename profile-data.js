const profile = {
  name: "Sarvesh Datar",
  title: "Chemical Process Engineer",
  summary: "A Chemical Process Engineer interested in solving complex engineering problems.",
  email: "sarveshd2002@gmail.com",
  github: "https://github.com/SarvDa68",
  cv: "assets/sarvesh-datar-cv.pdf",
  portrait: "assets/Photo.jpeg",

  // Write projects normally here.
  // Use "# Group" for a project group and "## Project title" for a project.
  // Optional lines: "Date:", "Kind:", "Image: image-path | caption", "Link: label | url".
  // Blank lines become paragraphs. Lines starting with "- " become bullets.
//Images not scaled


  projects: `
  # Professional Industrial Projects

## Process Design & Optimisation for Jubilant Ingrevia
Date: 2026
Kind: Working for Equinox Software Services Pvt. Ltd.

The primary aim of the project was to minimise energy consumption and operating costs while maximising product recovery for a separation train at Jubilant Ingrevia Facility.

In order to achieve the goal, we undertook a plant-wide process design and optimisation study. 
This included developing an accurate simulation model of the existing process and identifying bottlenecks. A total of 9 continuous distillation columns were modelled in Aspen Plus while another 3 columns were simulated in AspenBatchSep. 
The optimisation study involved evaluating alternative process configurations, equipment sizing, and operating conditions to minimise energy consumption and maximise recovery. 

As a result of the study, we proposed several retrofit design solutions to improve the existing process.
In addition we also proposed green-field alternatives like pressure swing distillation and reactive distillation solutions to replace the conventional high-energy consuming processes.

The retro-fit designs promised a reduction in energy consumption by 60% and an increase in product recovery by 15%. 


## Automation Study for Multi-Batch Production Facility
Date: 2026
Kind: Working for Equinox Software Services Pvt. Ltd.

A green field Multi-Batch Production Facility required an automation study to evaluate the feasibility of completely automating the production process. 
The Multi-Batch facility had a capacity to produce 9 different speciality chemical products on 3 separate production lines within the plant. 

The automation study included a detailed analysis of all the 9 chemical processes, their flow, equipment requirements, and the control systems required to ensure smooth running of the multi batch facility. 
We also evaluated the potential impact of automation on product quality, safety, and regulatory compliance.

A detailed report consisting of automation solutions, total cost of implementing the solutions and the advantages of automation in context of improved safety, better product quality and reduced labour costs was submitted to the client for further action. 


## Modelling and Simulation for Bioprocessing Facility
Date: 2026
Kind: Working for Equinox Software Services Pvt. Ltd.

Majority of lactic acid is produced through fermentation. 
A leading bioprocessing and speciality chemicals company required a detailed and robust model for simulating the fermentation process for lactic acid production.

Using the kinetic data, a primary kinetic model was developed in python. The basic python kinetic model was integrated with BioSteam to develop a process simulation model. 
The BioSteam model proved to be an open-sourvce alternative to the proprietary simulation software like Aspen. The open-source model was used for studying the effect of various process parameters on the fermentation process and also perform multi-objective optimisation.
An Aspen Plus model was also developed for the fermentation process to validate the results obtained from the BioSteam model. 

A detailed report consisting of the Aspen and BioSteam simulation model philosophy, optimisation results and recommendations for improving the fermentation process was submitted to the client for further action.



## Improvement of Proprietary Multi-Batch Distillation Software
Date: 2026
Kind: Working for Equinox Software Services Pvt. Ltd.

As a part of internal upgrade of the proprietary Multi-Batch Distillation Software (MBDS), a detailed study was conducted to improve the existing software.

The study included a detailed analysis of the existing software, its limitations, and areas for improvement. 
Special impetus was given to incorporating AI and machine learning techniques to improve the accuracy and efficiency of the software.
I also focussed on studying the algorithms used for solving the dynamic simulation using time marching and the optimisation algorithms used for optimising the multi-batch distillation process.

Theoretical study and demonstration of new algorithms was done for case studies to evaluate the performance of the new algorithms.
An improved version of the software was tested and validated against the literature data and existing software to ensure that the new algorithms provided better accuracy and efficiency.


# Internship Projects

## Production of an Active Pharmaceutical Ingredient Precursor
Date: 2024
Kind: As Research Intern at Indian Institute of Technology, Bombay (IIT-Bombay)

As a part of industrial research project, a lab scale setup developed to produce an active pharmaceutical ingredient precursor needed to be scaled up to a pilot scale production facility. 
A pre pilot scale process was setup at IIT-Bombay which included a packed bed reactor and batch distillation column along with other auxiliary equipment.
An online Gas Chromatography (GC) system was used to monitor the reaction and separation process continuously.

As a part of independant research work, experiments were conducted on lab and pre pilot scale setup to study the effect of sulphonation density of the catalyst on the acid activity and selectivity of the reaction.
A research paper based on this work was published in Molecular Catalysis. 

Using extensive experimentation and simulation work, the process was optimised to achieve maximum yield and purity of the product. 
A net saving of 40 % in production cost was achieved by replacing the conventional raw materials with new biorefinery-based materials, using solid regenrative catalysts which can be reused and optimising the process parameters

A detailed report consisting of the process route, design calculations, simulation results was submitted to the industry partner for further action.
Further research work incorporated reactive distillation to replace the reaction and batch distillation with a single unit operation. A fluidised bed dryer was also designed to allow continuous regeneration of the solid catalyst.



## Process Design for Production of a Perfumery Intermediate Chemical
Date: 2023
Kind: Process design internship

Add project details here: feed/product specifications, process route, equipment choices, design calculations, simulation results, and economic or safety considerations.

# Academic Projects

## Predicting and Controlling the Growth Shape of Crystals: A Solvent Selection Approach
Date: 2025
Kind: Master's Thesis Project at Imperial College London

Thesis project supervised by Prof. Dr. Claire Adjiman.

Add the core technical details here: research question, crystal system, solvent-selection method, modelling approach, experimental or computational workflow, and conclusions.

## Process Design for Sustainable Production of Formaldehyde
Date: 2024
Kind: Design Project completed durring Master's at Imperial College London 

Add project details here: process route, design basis, mass and energy balances, reactor/separation design, sustainability considerations, and final process evaluation.


## Production of an Active Pharmaceutical Ingrdient (API) Precursor
Date: 2024
Kind: Bachelor's Thesis Project


## Design and Optimisation of Medical Oxygen Concentrator
Date: 2023
Kind: 

Add project details here: adsorption process, design constraints, optimisation method, assumptions, calculations, and final design outcome.

## TEG ChemE Car
Date: 2022
Kind: Design / competition

Add project details here: reaction system, stopping mechanism, design choices, testing, calibration, and performance.

## Process Design for Production of Green Copper Nanoparticles
Date: 2022
Kind: Process design

Add project details here: synthesis route, process assumptions, equipment choices, sustainability considerations, and final design.
  `,

  // Use the same simple format here.
  // Suggested groups: "# Courses", "# Certifications", "# Publications".
  academicRecord: `
# Courses

## Add course name
Date:
Kind: Course

Add institution, topics covered, project work, grade, or relevant technical content.

# Certifications

## Add certification name
Date:
Kind: Certification

Add issuer, credential ID, link, and what the certification covered.

# Publications

## Add publication title
Date:
Kind: Publication

Add authors, venue, status, abstract, DOI, preprint, poster, or report link.
  `,

  cvNotes: ""
};
