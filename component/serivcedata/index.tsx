export interface ServiceSection {
  heading: string;
  content: string;
  list?: string[];
}

export interface ServiceData {
  slug: string;
  title: string;
  breadcrumb: string;
  intro: string;
  image: string;
  sections: ServiceSection[];
}

export const servicesList = [
  { name: "Nitrous Oxide Relaxation", slug: "nitrous-oxide-relaxation" },
  { name: "Orthodontic Treatment", slug: "orthodontic-treatment" },
  { name: "Pediatric Dental Treatment", slug: "pediatric-dental-treatment" },
  { name: "Dental Implant", slug: "dental-implant" },
  { name: "Root Canal Treatment", slug: "root-canal-treatment" },
  { name: "Complete Denture", slug: "complete-denture" },
  { name: "Dental Crown & Bridges", slug: "dental-crown-and-bridges" },
  { name: "Wisdom Teeth Removal", slug: "wisdom-teeth-removal" },
  { name: "Dental Fillings", slug: "dental-fillings" },
  { name: "Gum Treatment", slug: "gum-treatment" },
  { name: "Invisalign Treatment", slug: "invisalign-treatment" },
];

export const servicesData: Record<string, ServiceData> = {
  "nitrous-oxide-relaxation": {
    slug: "nitrous-oxide-relaxation",
    title: "Nitrous Oxide Relaxation",
    breadcrumb: "Nitrous Oxide Relaxation",
    intro: "Breathing nitrous oxide will put a smile on your face from the moment you slip into the dentist's chair. This safe and highly effective method of patient relaxation has helped millions of people overcome their anxieties about dental treatment. As you try nitrous oxide, your feelings of anxiety will melt away quickly and be replaced by a warm, gentle feeling. Patients describe the experience as peacefully floating in a pleasant dreamlike state. For the apprehensive child or adult, nitrous oxide can be the key to an enjoyable, comfortable and anxiety-free dental experience.",
    image: "nitrous-oxide",
    sections: [
      {
        heading: "What is nitrous oxide?",
        content: "Nitrous oxide is a gas that is used in combination with pure oxygen to relieve dentistry-related anxiety. When inhaled and absorbed into the body, nitrous oxide has a natural calming effect that lasts only as long as your dental procedure."
      },
      {
        heading: "Is Nitrous Oxide Safe?",
        content: "COMPLETELY. Nitrous oxide is recognized as the safest sedative used in dentistry today. It is mild, non-toxic and removes itself naturally from your body after use. Its benefits are even recommended for patients with certain medical conditions, including high blood pressure, angina and a history of heart attacks. And unlike general anesthesia, patients on nitrous oxide remain fully conscious and responsive at all times."
      },
      {
        heading: "Is Nitrous oxide safe for children?",
        content: "ABSOLUTELY. While our practice goes to great lengths to make every child feel comfortable and at ease during dental visits, nitrous oxide provides an extra level of relaxation for anxious young patients."
      },
      {
        heading: "What are the advantages of nitrous oxide?",
        content: "It's fast acting! Within minutes of administration, your stress will be transformed into a sensation of soothing relaxation. Your depth of sedation can be adjusted easily. The depth of nitrous oxide sedation can be adjusted to quickly achieve your optimal level of relaxation.",
        list: [
          "Fast acting — relaxation within minutes",
          "Depth of sedation is easily adjustable",
          "Recovery time is short — just 3 to 5 minutes",
          "No lasting after-effects that impair your ability to drive",
          "Safe for both children and adults"
        ]
      },
      {
        heading: "Is Nitrous oxide right for me?",
        content: "Please discuss the possibility of nitrous oxide conscious sedation with us. It may be just the solution you or your child have been waiting for. If you have any questions regarding the use of nitrous oxide, feel free to discuss it with your family physician."
      }
    ]
  },
  "orthodontic-treatment": {
    slug: "orthodontic-treatment",
    title: "Orthodontic Treatment in Coimbatore",
    breadcrumb: "Orthodontic Treatment",
    intro: "You can achieve the smile of your dreams at Dani Dental Clinic with the help of a variety of orthodontic treatments in Coimbatore. The teeth and jaws are moved into the proper positions by orthodontists using a range of tools, such as braces and aligners.",
    image: "orthodontic",
    sections: [
      {
        heading: "Introduction",
        content: "If you're looking for an orthodontic dentistry clinic, you've come to the right spot. Orthodontics may be the answer for you if you want to improve your smile's aesthetics and oral health. We at Dani provide customized solutions as per our patients' wishes and needs. Orthodontics is a specialty in the dental field. The diagnosis, prevention, and treatment of malocclusions—misalignments of the jaws and teeth—are its main concerns."
      },
      {
        heading: "Who needs orthodontic treatment?",
        content: "Both children and adults can benefit from orthodontic treatment. Growing teeth and jaws can help children's teeth and jaws operate and look better. The smile, bite, and general oral health of adults can all be improved."
      },
      {
        heading: "Why orthodontic treatment?",
        content: "The decision to receive orthodontic treatment is made for a variety of reasons.",
        list: [
          "To make your smile more aesthetically pleasing",
          "To fix a poor bite",
          "To enhance the efficiency of your jaws and teeth",
          "To lower the risk of gum disease and cavities",
          "To enhance general oral health"
        ]
      },
      {
        heading: "Types of Dental Braces",
        content: "Metal braces, ceramic braces, lingual braces, and clear aligners are the four primary types of braces for teeth.",
        list: [
          "Metal Braces — Most common and affordable, made of stainless steel",
          "Ceramic Braces — Less noticeable, tooth-colored material",
          "Lingual Braces — Attached to the back of teeth, virtually invisible",
          "Clear Aligners — Custom-made removable plastic trays, worn 22-23 hours daily"
        ]
      },
      {
        heading: "How to maintain braces",
        content: "For the best results and to maintain good dental hygiene, it's critical to take care of your braces.",
        list: [
          "Brush teeth at least twice daily for two minutes with fluoride toothpaste",
          "Use floss threaders or orthodontic floss to clean between teeth",
          "Use mouthwash and oral irrigators to remove plaque",
          "Skip meals that are chewy, sticky, or hard",
          "Visit your orthodontist for routine examinations and corrections"
        ]
      },
      {
        heading: "Conclusion",
        content: "Maintain your daily routine of brushing your teeth twice and cleaning once for the best oral hygiene. Visit Dani Dental, as we have qualified professionals for orthodontic treatment in Coimbatore. Call us at 95979 06838."
      }
    ]
  },
  "dental-implant": {
    slug: "dental-implant",
    title: "Dental Implants in Coimbatore",
    breadcrumb: "Dental Implant",
    intro: "We at Dani Dental Clinic offer dental implants in Coimbatore. If you're looking for a permanent solution for missing teeth, we specialize in providing high-quality dental implant services to our patients. We provide affordable tooth implant services and other dental services in Coimbatore.",
    image: "dental-implant",
    sections: [
      {
        heading: "What are Dental Implants?",
        content: "Dental implants are a permanent solution for missing teeth, offering a secure and reliable method of tooth replacement. At Dani Dental Clinic, we provide dental implants that create a strong and stable foundation for new teeth. It is the process of replacing an artificial tooth in the place of a missing or damaged tooth. The implant procedure involves metal screws that are biocompatible with artificial ceramic teeth that match your natural teeth."
      },
      {
        heading: "Why Dental Implants?",
        content: "If a person has one or more missing teeth, they face various hurdles in their day-to-day lives.",
        list: [
          "Lack of confidence when speaking or smiling",
          "Unable to eat hard foods comfortably",
          "Missing teeth change the facial structure",
          "Dental implants provide a permanent, natural-looking replacement",
          "Gain confidence to speak, smile, and eat favorite dishes"
        ]
      },
      {
        heading: "Types of Dental Implants",
        content: "There are several types of dental implant procedures available:",
        list: [
          "Single tooth implant",
          "Zygomatic implant",
          "All-on-4 implants",
          "All-on-5 implants"
        ]
      },
      {
        heading: "The Implant Procedure",
        content: "The dental implant procedure involves several steps: consultation and planning, implant placement into the jawbone, healing period (osseointegration), abutment placement, and finally crown placement. The entire process typically takes 3-6 months for full healing."
      },
      {
        heading: "Post-procedure Care",
        content: "To encourage recovery and avoid issues following your dental implant surgery, make sure to carefully follow your dentist's instructions.",
        list: [
          "Avoid particular foods and activities during recovery",
          "Use prescribed painkillers and antibiotics as directed",
          "Brush and floss teeth twice daily",
          "Attend routine dental examinations and cleanings",
          "Choose a trustworthy oral surgeon or dentist"
        ]
      },
      {
        heading: "Why Dani Dental Clinic?",
        content: "At Dani Dental Clinic in Saibaba Colony, we have an experienced dentist who specializes in painless dental implant treatments. We have done implant surgeries for thousands of happy faces. We prefer to give painless advanced treatments at an affordable cost with state-of-the-art facilities."
      }
    ]
  },
  "root-canal-treatment": {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment in Coimbatore",
    breadcrumb: "Root Canal Treatment",
    intro: "Welcome to the prestigious Dani Dental Clinic. We specialize in Root Canal Treatment in Coimbatore and offer patients a full range of dental care services. Our clinic specializes in offering patients affordable care and assisting them in regaining their oral health and maintaining a beautiful smile.",
    image: "root-canal",
    sections: [
      {
        heading: "What is Root Canal Treatment?",
        content: "This treatment is also called RCT treatment, endodontic treatment, or tooth canal treatment. This treatment is performed if a tooth is badly decayed or fractured. If the tooth is left untreated, the pain will get worse and the gum disease will spread to other teeth, leading to more decay."
      },
      {
        heading: "Does RCT treatment cause pain?",
        content: "As Dani Dental Clinics provides you with the latest technology in endodontic procedures to ease your pain, our endodontic specialists perform RCT treatments that cause the least painful procedures — even less painful than a tooth extraction."
      },
      {
        heading: "When is an RCT procedure required?",
        content: "Root canal therapy can be essential in several situations:",
        list: [
          "Tooth has a large cavity extending into the pulp chamber",
          "The tooth has a fracture or crack",
          "The tooth's nerve has died",
          "Trauma or gum disease has caused the tooth to get infected"
        ]
      },
      {
        heading: "Symptoms indicating need for RCT",
        content: "Watch for these warning signs:",
        list: [
          "Toothache while biting or chewing",
          "Sensitivity to both cold and heat",
          "Swollen and red gums surrounding the tooth",
          "A tooth that is stained or dark",
          "An infected lump on the gums close to the tooth"
        ]
      },
      {
        heading: "Benefits of Root Canal Treatment",
        content: "Root canal treatment offers several important benefits:",
        list: [
          "Save a tooth that might normally require extraction",
          "Relieve tooth pain and symptoms of infection",
          "Stop the tooth from getting infected again",
          "Maintain overall tooth health",
          "Improve your smile's appearance"
        ]
      },
      {
        heading: "Conclusion",
        content: "The best solution for Root Canal in Coimbatore is Dani Dental Clinic, as we have highly trained professionals, modern technology, personalized care, and affordable prices. Contact us at 95979 06838 to book your appointment."
      }
    ]
  },
  "pediatric-dental-treatment": {
    slug: "pediatric-dental-treatment",
    title: "Pediatric Dental Treatment in Coimbatore",
    breadcrumb: "Pediatric Dental Treatment",
    intro: "At Dani Dental Clinic, we understand that children need special dental care. Our pediatric dental specialists create a warm, friendly environment to make your child's dental visit comfortable and fun. We offer comprehensive dental care for children of all ages.",
    image: "pediatric",
    sections: [
      {
        heading: "Why Pediatric Dentistry?",
        content: "Children's dental needs are unique and require specialized care. Early dental visits help establish good oral hygiene habits and prevent future dental problems. Our pediatric dentists are trained to handle the unique needs of growing children."
      },
      {
        heading: "Our Pediatric Services",
        content: "We offer a wide range of dental services for children:",
        list: [
          "Regular dental check-ups and cleanings",
          "Fluoride treatments for cavity prevention",
          "Dental sealants to protect molars",
          "Treatment of tooth decay and cavities",
          "Orthodontic evaluation and early intervention",
          "Emergency dental care for children"
        ]
      },
      {
        heading: "When to Start Dental Visits",
        content: "The American Academy of Pediatric Dentistry recommends that children visit the dentist by their first birthday or within six months of their first tooth appearing. Early visits help identify potential problems and establish a dental home for your child."
      },
      {
        heading: "Tips for Parents",
        content: "Help your child maintain healthy teeth:",
        list: [
          "Start brushing as soon as the first tooth appears",
          "Use fluoride toothpaste appropriate for their age",
          "Limit sugary snacks and drinks",
          "Make dental visits a positive experience",
          "Lead by example with your own oral hygiene"
        ]
      }
    ]
  },
  "invisalign-treatment": {
    slug: "invisalign-treatment",
    title: "Invisalign Treatment in Coimbatore",
    breadcrumb: "Invisalign Treatment",
    intro: "Invisalign is a modern and comfortable way to straighten teeth using clear, removable aligners. These aligners gently shift your teeth into place without the hassle of metal braces. With advanced 3D scanning and digital planning, Invisalign offers a faster, more accurate, and convenient orthodontic experience—helping you achieve a confident smile with comfort!",
    image: "invisalign",
    sections: [
      {
        heading: "Invisalign Technology – The Future of Orthodontics",
        content: "Invisalign utilises advanced 3D scanning technology and proprietary SmartTrack material to create custom-made clear aligners that comfortably and effectively move your teeth into place. Unlike traditional braces, Invisalign aligners are nearly invisible, allowing you to eat, drink, and maintain your oral hygiene just as you did before."
      },
      {
        heading: "Invisalign Cost in Coimbatore",
        content: "At Dani Dental Clinic, we offer customized Invisalign treatment with affordable plans and flexible payment options. You get the perfect smile without financial stress. Book a consultation today!"
      },
      {
        heading: "What can Invisalign fix?",
        content: "Invisalign is a flexible treatment to fix various dental issues:",
        list: [
          "Gapped teeth — close spaces between teeth",
          "Crooked teeth — gently shift into alignment",
          "Deep bite correction",
          "Open bite treatment",
          "Works even with wisdom teeth present"
        ]
      },
      {
        heading: "Benefits of Invisalign",
        content: "The clear choice for discreet treatment:",
        list: [
          "Virtually Invisible — clear plastic, nearly undetectable",
          "Removable — take out while eating, drinking, or brushing",
          "Comfortable — smooth custom-made plastic, no irritation",
          "No Food Restrictions — eat whatever you want",
          "Precise digital treatment planning"
        ]
      }
    ]
  },
  "dental-crown-and-bridges": {
    slug: "dental-crown-and-bridges",
    title: "Dental Crown & Bridges in Coimbatore",
    breadcrumb: "Dental Crown & Bridges",
    intro: "Dental crowns are tooth-shaped caps placed on teeth to restore shape and appearance. A Crown covers the entire tooth. Dental Bridges are used to replace one or more missing or damaged teeth. Bridges are usually made of porcelain fused to metal for both strength and natural appearance.",
    image: "crown-bridges",
    sections: [
      {
        heading: "Types of Crowns",
        content: "We offer various types of dental crowns to meet your needs:",
        list: [
          "Ceramic Crowns — recommended for front teeth, excellent color blending",
          "Zirconia Crowns — very strong, durable, biocompatible, natural-looking",
          "Porcelain Crowns — fused to metal for strength and good seal",
          "Emax Crowns — translucent, reflects light like natural teeth",
          "Gold Alloy Crowns — resistant to wear and fracturing",
          "Base Metal Alloy Crowns — minimal tooth removal needed"
        ]
      },
      {
        heading: "When do you need Crowns & Bridges?",
        content: "Crowns and bridges are recommended when teeth are damaged, decayed, or missing. They help restore the function and appearance of your teeth, allowing you to bite better and smile confidently."
      },
      {
        heading: "Maintenance",
        content: "Once the Crown or Bridge is fixed, it's really important to maintain a daily routine of mouth hygiene. Regular brushing, flossing, and dental check-ups will help extend the life of your crowns and bridges."
      }
    ]
  },
  "complete-denture": {
    slug: "complete-denture",
    title: "Dentures in Coimbatore",
    breadcrumb: "Complete Denture",
    intro: "Dani Dental Clinic offers Dentures in Coimbatore. Our top dentist team is dedicated to helping you achieve the smile of your dreams through customized solutions for your long-term dental problems. Dentures restore a brighter smile by replacing missing teeth.",
    image: "denture",
    sections: [
      {
        heading: "What are Dentures?",
        content: "Dentures are removable dental devices used to substitute for missing teeth. They are constructed out of an acrylic resin or steel base with artificial teeth connected to it. Dentures can replace all teeth (full dentures) or just a portion (partial dentures)."
      },
      {
        heading: "Types of Dentures",
        content: "There are various types of dentures available:",
        list: [
          "Complete Dentures — replace all teeth in upper or lower jaw",
          "Partial Dentures — replace some missing teeth",
          "Overdentures — fit over remaining natural teeth or implants",
          "Snap-on Dentures — attach to dental implants for stability"
        ]
      },
      {
        heading: "Benefits of Dentures",
        content: "Dentures offer numerous benefits for patients with missing teeth, including improved appearance, better speech, easier eating, and restored confidence in your smile."
      },
      {
        heading: "How to Care for Dentures",
        content: "Proper care extends the life of your dentures:",
        list: [
          "Remove and rinse after eating",
          "Brush dentures daily with a soft brush",
          "Soak overnight in denture cleaning solution",
          "Handle carefully to avoid breakage",
          "Visit your dentist for regular check-ups"
        ]
      }
    ]
  },
  "wisdom-teeth-removal": {
    slug: "wisdom-teeth-removal",
    title: "Wisdom Teeth Removal in Coimbatore",
    breadcrumb: "Wisdom Teeth Removal",
    intro: "Dani Dental Clinic offers specific treatment and procedures for wisdom teeth removal in Coimbatore to help in your long-term pain relief. Here is the complete guide for wisdom tooth removal at a dental clinic, including tips for wisdom tooth home remedies and many more.",
    image: "wisdom-teeth",
    sections: [
      {
        heading: "What is Wisdom Teeth Removal?",
        content: "Wisdom teeth removal is a surgical treatment that involves removing one or more wisdom teeth, which are the four permanent adult teeth located in the back corners of your mouth, two on top and two on bottom. The cost of wisdom teeth removal in Coimbatore is affordable at Dani Dental Clinic."
      },
      {
        heading: "What is Third Molar?",
        content: "Third molars are popularly known as wisdom teeth. They are the last permanent teeth to appear, usually between ages 17 and 25. Many people develop impacted wisdom teeth that don't have enough room to appear or develop normally."
      },
      {
        heading: "Symptoms of Wisdom Teeth",
        content: "Watch for these signs that may indicate wisdom teeth problems:",
        list: [
          "Radiating pain spreading to head",
          "Foul smell or bad taste",
          "Jaw pain and stiffness",
          "Swollen gums due to food lodgment",
          "Difficulty brushing back teeth"
        ]
      },
      {
        heading: "Prevention of Complications",
        content: "The best way to prevent wisdom tooth removal complications is to follow your dentist's post-operative instructions carefully, maintain good oral hygiene, and attend follow-up appointments."
      }
    ]
  },
  "dental-fillings": {
    slug: "dental-fillings",
    title: "Dental Fillings in Coimbatore",
    breadcrumb: "Dental Fillings",
    intro: "At DANI Dental Clinics in Saibaba Colony, Coimbatore, we use modern dental filling materials to restore cavities and damaged teeth. The filling process is done under local anesthesia and is completely painless. Our enthusiastic team of professionals provides customized treatment for every patient.",
    image: "dental-fillings",
    sections: [
      {
        heading: "About Dental Fillings",
        content: "If the decay is close to the root, our dentist may first put in a liner made of glass ionomer cement, composite resin, or another material to safeguard the nerve. Dani Dental Clinics provides secure and high-class dental filling treatment. Small shallow cavities can be filled with dental cements which prevent further deepening of the decay and stop spreading decay to the next tooth."
      },
      {
        heading: "Types of Dental Fillings",
        content: "We offer several types of dental fillings:",
        list: [
          "Glass Ionomer Cement — releases fluoride for additional protection",
          "Tooth Coloured Composite — natural-looking, durable",
          "Esthetic Anterior Tooth Filling — for front teeth with excellent aesthetics"
        ]
      },
      {
        heading: "Benefits",
        content: "Our dental fillings are not only aesthetically pleasing but also add strength to damaged teeth. These restorations are strong and long-lasting due to better bonding technologies."
      }
    ]
  },
  "gum-treatment": {
    slug: "gum-treatment",
    title: "Gum Treatment in Coimbatore",
    breadcrumb: "Gum Treatment",
    intro: "Gum treatment is a series of procedures that are used to prevent, diagnose, and treat gum disease. At Dani Dental Clinics, we offer the best gum treatment in Coimbatore, as we have experienced dentists who can provide you with high-quality treatment and post-treatment guidance to cure your gum problems.",
    image: "gum-treatment",
    sections: [
      {
        heading: "What is Gum and Periodontal Treatment?",
        content: "A gum (periodontal) ailment is an infection of the tissues that hold teeth in place. Gum disease is usually caused by poor brushing and flossing habits that allow plaque to build up. In dangerous stages, gum disease can lead to bleeding, tooth loss, and painful chewing problems."
      },
      {
        heading: "Gum Treatment Procedures",
        content: "We offer comprehensive gum treatment including:",
        list: [
          "Scaling and root planing (deep cleaning)",
          "Gingivitis treatment",
          "Swollen gums treatment",
          "Periodontal surgery when needed",
          "Ongoing maintenance and prevention"
        ]
      },
      {
        heading: "Symptoms of Gum Disease",
        content: "Watch for these warning signs:",
        list: [
          "Red, swollen, or tender gums",
          "Bleeding while brushing or flossing",
          "Persistent bad breath",
          "Receding gums",
          "Loose teeth",
          "Pain when chewing"
        ]
      },
      {
        heading: "Prevention",
        content: "Good oral hygiene is the key to preventing gum disease. Brush twice daily, floss regularly, eat a balanced diet, avoid tobacco, and visit your dentist for routine check-ups and cleanings."
      }
    ]
  }
};
