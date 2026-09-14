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
  // Optional lines: "Date:", "Kind:", "Image: image-path | caption",
  // "Attachment: file-path | download label", and "Link: label | url".
  // Example: Attachment: assets/project-report.pdf | Project report
  // Images are shown in a scaled gallery, can be opened full size, and can be downloaded.
  // Blank lines become paragraphs. Lines starting with "- " become bullets.
  
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

# Independant Projects 

## Equation Oriented Distillation Column Simulator
Date: 2026

Independently designed and developed a rigorous steady-state distillation simulator in Python using Pyomo and IPOPT, with a focus on process optimisation, numerical methods, and model-based decision making. The simulator solves the complete MESH (Material, Equilibrium, Summation, and Heat) equations simultaneously using an equation-oriented nonlinear programming framework, enabling robust analysis of column behaviour beyond conventional sequential calculations. Advanced numerical techniques were implemented to improve convergence, including physically informed initialisation strategies, adaptive solver handling, and a custom bisection-based specification framework to overcome degeneracies associated with purity-constrained optimisation problems.

The tool is being developed as a research platform for distillation column optimisation, surrogate model generation, and process intensification studies. Key features include full stage-wise energy balances, convergence diagnostics, automated fallback strategies, and comprehensive process visualisation capabilities. The project demonstrates strong independent problem-solving, process modelling, and computational engineering skills, and is currently under active development as an open-source project hosted on GitHub.



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

Attachment: assets/CAPSTONE PROJECT FINAL .pdf | Bachelor's Thesis/ Internship Report

## Process Design for Production of a Perfumery Intermediate Chemical
Date: 2023
Kind: As Project Trainee at CSIR-National Chemical Laboratory (CSIR-NCL)

Acetophenone is a perfumery chemical widely used in the fragrance industry. 
Production of Acetophenone using Ethyl Benzene Hydroperoxide and Cumene Hydroperoxide is highly preffered. 
This is because the process is highly selective and produce co-products which are easy to separate.
A lab scale and pilot scale setup was developed at CSIR-NCL to produce Ethyl Benzene Hydroperoxide and Cumene Hydroperoxide.

The hydroperoxides were produced through the oxidation of Ethyl Benzene and Cumene respectively.
The reactions required high temperature and pressure conditions and were carried out in a batch reactor.
A major engineering challenge arised in the process due to highly unstable nature of the hydroperoxides.

In order to overcome the challenge, a detailed study was conducted to understand the effect of various process parameters on the reaction and separation process.
As a part of the study, several experimental and process intensification options were also considered which included a plug flow reactor and a continuous stirred tank reactor for the oxidation reaction and a reactive distillation column for the separation of the hydroperoxides from the reaction mixture.
It was concluded that precise and advanced process control are required for process intensification options to ensure safe operation and avoid any runaway conditions of the process.


# Academic Projects

## Predicting and Controlling the Growth Shape of Crystals: A Solvent Selection Approach
Date: 2025
Kind: Master's Thesis Project at Imperial College London

Thesis project supervised by Prof. Dr. Claire Adjiman.

The major problem in crystallisation systems is the formation of undesired crystal shapes which can clog the downstream equipment or reduce the overall efficiency of the process.
The project aimed to develop a mechanistic modelwhich could predict the growth shape of crystals based on the solvent selection and process conditions.
The model was extended further to control the growth shape of crystals to completely avoid the formation of undesired crystal shapes by selecting optimal solvents and operating conditions. The model was validated against experimental data for naphtalene and biphenyl crystallisation systems.
Further work included developing a machine learning model to predict the growth shape of crystals based on the solvent selection and process conditions. The model was trained on a dataset of experimental results and validated against literature data.


Attachment: assets/Adjiman_DATAR Sarvesh 06007570.pdf | MSc Thesis

Image: assets/Poster1.jpeg | MSc Poster



## Process Design for Sustainable Production of Formaldehyde
Date: 2024
Kind: Design Project completed during Master's at Imperial College London 

As a part of design project, a process for the sustainable production of formaldehyde from CO2 and H2 was designed. 
The process produced Methanol from CO2 and H2 using a catalytic hydrogenation reaction. The produced methanol was then converted to formaldehyde using a catalytic dehydrogenation reaction. 
The complete process was designed and simulated in Aspen HYSYS. 
Using heat integration techniques, the process was optimised to minimise energy consumption and maximise product recovery.
Further more, OpenLCA was used to perform a life cycle assessment of the process to evaluate the environmental impact of the process and identify areas for improvement. 



## Design and Optimisation of Medical Oxygen Concentrator
Date: 2023
Kind: Seminar Project at MIT-WPU

The medical oxygen concentrator concentrates oxygen from ambient air using a pressure swing adsorption process.
Several other technologies like vacuum swing adsorption, rapid pressure swing adsorption have been used extensively in the industry for oxygen concentration.
For this project, a detailed study regarding the feasiblity and design of rapid pressure swing adsorption process for oxygen concentration was conducted.
Rapid Pressure Swing Adsorption (RPSA) utilises a single adsoption bed as opposed to two, thereby saving cost. Special importance was given for optimisation of adsoroption process while maximising recovery and reducing energy consumption and bed/zeolite cost.

The design was further used by a team to develop a prototype of the medical oxygen concentrator which was tested and calibrated for performance.

## TEG ChemE Car
Date: 2022
Kind: AIChE ChemE Car Competition 2022

American Institute of Chemical Engineers (AIChE) ChemE Car Competition is an annual competition where teams of undergraduate and graduate students design and build a small-scale car powered by a chemical reaction. The car must be able to travel a specified distance and stop at a designated point, all while being powered by a chemical reaction.
In a team, we developed a chemical car which was powered by thermoelectric generator (TEG). 
Exothermic and endothermic reactions were used to generate heat and cool the TEG respectively. The TEG converted the heat energy into electrical energy which was used to power the car.
Iodine clock reaction was used to control the speed of the car and ensure that it stopped at the designated point.

The design of the car was conceptualised and then the car was built and tested for performance. The car was able to travel the specified distance and stop at the designated point with a high degree of accuracy.
Along with the design and developement, I was also the safety head of the team and was responsible for ensuring that all safety protocols were followed during the design, development, and testing of the car.

The TEG Chemical Car won the Student Regional Conference (SRC) 2022 and was selected to represent the India at the AIChE Annual Student Conference 2022.

## Process Design for Production of Green Copper Nanoparticles
Date: 2022
Kind: Process design

Developed a sustainable synthesis process for copper nanoparticles (CuNPs) using Azadirachta indica (neem) leaf extract as a natural reducing and capping agent via homogeneous precipitation. The work focused on designing an environmentally friendly and cost-effective alternative to conventional nanoparticle synthesis routes by eliminating the use of toxic chemical reducing agents. The synthesized nanoparticles were characterized using UV-Visible Spectroscopy, FTIR, and SEM, confirming successful CuNP formation with predominantly spherical particles in the 50-70 nm size range.

The developed CuNPs were evaluated for photocatalytic degradation of methylene blue dye in wastewater under sunlight irradiation. The process achieved approximately 60% dye degradation within 120 minutes, demonstrating the potential of bio-derived nanomaterials for sustainable wastewater treatment applications. This project combined process development, materials characterization, and performance evaluation to support environmentally responsible treatment technologies.
`,

  // Use the same simple format here.
  // Suggested groups: "# Courses", "# Certifications", "# Publications".
  academicRecord: `
# Education

## MSc Advanced Chemical Engineering with Process Systems Engineering 
Date: 2025
Kind: Imperial College London

Completed Master's degree from Imperial College London. 

Grade : Distinction

Courses Taken:
- Advanced Process Design 
- Advanced Process Optimisation 
- Dynamic Behaviour of Process Systems 
- Advanced Process Operations 
- Machine Learning for Chemical Engineering
- Pharmaceutical Process Developement
- Advanced Environmental Engineering 
- Sustainable Energy Technologies 


## B.Tech Chemical Engineering 
Date: 2024
Kind: MIT-WPU

Completed Bachelor's degree in Chemical Engineering from MIT-WPU, Pune. 
Graduated as a Gold Medalist. 
Completed a minor degree in computer science engineering along with the major degree.


CGPA : 9.92 / 10 

Additional Courses Taken (Aprt from regular ChemE Courses):
- Cell and Microbial Biology
- Biocatalysis
- Bioreactor Design and Analysis 
- Database management Systems
- Artificial Intelligence and Machine Learning
- Software Developement and Project Management 
- Accounting and Finance 




# Publications

## Effect of sulfonation density on acid strength in ion exchange resins: Insights from solid-state NMR and density functional theory
Date: 2024
Kind: Elsevier Molecular Catalysis

DOI : 10.1016/j.mcat.2026.115794

View Paper : https://www.sciencedirect.com/science/article/abs/pii/S2468823126000945?via%3Dihub



## Experimental Study on Green Synthesis of Copper Nanoparticles and Its Utilization for Degradation of Organic Dye
Date: 2023
Kind: Springer Lecture Notes in Civil Engineering  

DOI : 10.1007/978-981-99-6762-9_7

View Paper : https://link.springer.com/chapter/10.1007/978-981-99-6762-9_7


  `,

  cvNotes: ""
};
