export interface MarkingItem {
  id: string;
  text: string;
  checked?: boolean;
}

export interface MarkingSection {
  title: string;
  items: MarkingItem[];
}

export interface OSCEScenario {
  id: number;
  stationNumber: number;
  title: string;
  patientName: string;
  patientDOB: string;
  reasonForVisit: string;
  patientScript: {
    opening: string[];
    ideasConcernsExpectations: { question: string; answer: string }[];
    smokingHistory: { question: string; answer: string }[];
    pastMedicalHistory: string[];
    medications: string[];
    familyHistory: string[];
    socialHistory: { category: string; answer: string }[];
    motivation: { question: string; answer: string }[];
    ending: string[];
  };
  candidateInstructions: string[];
  candidateScript: {
    introduction: string[];
    dataGathering: string[];
    clinicalManagement: string[];
    interpersonalSkills: string[];
  };
  markingScheme: MarkingSection[];
}

export const osceScenarios: OSCEScenario[] = [
  {
    id: 1,
    stationNumber: 1,
    title: "Smoking Cessation - Construction Worker",
    patientName: "Rashid Ahmed",
    patientDOB: "6 November 1987",
    reasonForVisit: "The nurse asked me to talk about my smoking",
    patientScript: {
      opening: [
        "Yeah, that's fine.",
        "I know this is about smoking."
      ],
      ideasConcernsExpectations: [
        { question: "What do you think about smoking?", answer: "I know it's unhealthy, but it helps me deal with stress." },
        { question: "Concerns about quitting?", answer: "I'm worried I'll get angry and won't cope at work." },
        { question: "What are you hoping for today?", answer: "I want to know if quitting is actually realistic for me." }
      ],
      smokingHistory: [
        { question: "How long have you smoked?", answer: "About 15 years." },
        { question: "How much do you smoke?", answer: "Around 20 cigarettes a day." },
        { question: "Type?", answer: "Normal cigarettes." },
        { question: "When do you smoke the most?", answer: "In the morning, on breaks, and in the evening." },
        { question: "How soon after waking?", answer: "Within 10 minutes." },
        { question: "How does smoking make you feel?", answer: "It calms me down, but I feel breathless sometimes." },
        { question: "Effect on relationships?", answer: "My wife wants me to quit." },
        { question: "Money spent?", answer: "About £55 a week." },
        { question: "Tried quitting before?", answer: "Yes, twice." },
        { question: "What method did you use?", answer: "Just willpower, I didn't use any patches or anything." },
        { question: "What made you relapse?", answer: "I got stressed and started again." },
        { question: "Withdrawal symptoms?", answer: "Strong cravings, headaches, irritability, poor sleep." }
      ],
      pastMedicalHistory: [
        "I get occasional chest tightness when I walk fast, but nothing diagnosed.",
        "(If asked further: \"I haven't seen a doctor about it.\")"
      ],
      medications: [
        "No regular medications.",
        "Never tried nicotine replacement.",
        "Allergies: No known allergies."
      ],
      familyHistory: [
        "My dad had a stroke in his 60s.",
        "My mum has diabetes."
      ],
      socialHistory: [
        { category: "Alcohol", answer: "A couple of drinks on weekends." },
        { category: "Recreational drugs", answer: "No." },
        { category: "Work", answer: "I work as a security guard, mostly night shifts." },
        { category: "Home life", answer: "I live with my wife and two kids." },
        { category: "Stress", answer: "Work stress and lack of sleep make me smoke more." },
        { category: "Exercise", answer: "Very little — I feel tired most of the time." },
        { category: "Support", answer: "My family would support me quitting." }
      ],
      motivation: [
        { question: "Motivation score (1–10)?", answer: "Probably a 7." },
        { question: "Are you aware of the medical risks of smoking?", answer: "I know it's bad for your lungs and heart. My dad had a stroke so I worry about that." },
        { question: "If PA explains support", answer: "I didn't realise there was medication that could help. Follow-up support sounds helpful." }
      ],
      ending: [
        "That sounds encouraging.",
        "I'm willing to try quitting with help.",
        "No questions, thank you."
      ]
    },
    candidateInstructions: [
      "You are a <strong>physician associate</strong> working in a GP surgery",
      "A <strong>37-year-old man</strong> has been referred by the practice nurse",
      "His presenting concern is <strong>smoking cessation counselling</strong>",
      "Please take a <strong>history</strong> and provide appropriate <strong>advice and support</strong>",
      "At the end of the station, the examiner may ask you some <strong>further questions</strong>"
    ],
    candidateScript: {
      introduction: [
        "Introduce yourself with name and role",
        "Confirm patient identity (name and DOB)",
        "Explain the purpose of the consultation",
        "Obtain consent to proceed"
      ],
      dataGathering: [
        "Explore patient's ideas about smoking",
        "Explore concerns about quitting",
        "Explore expectations from consultation",
        "Take comprehensive smoking history",
        "Assess nicotine dependence (time to first cigarette)",
        "Explore previous quit attempts and barriers",
        "Take relevant medical, drug, and family history",
        "Explore social circumstances and support network"
      ],
      clinicalManagement: [
        "Explain health risks of continued smoking",
        "Discuss benefits of quitting",
        "Assess motivation and readiness to change",
        "Discuss pharmacological options (NRT, varenicline, bupropion)",
        "Discuss behavioural support options",
        "Refer to NHS Stop Smoking Services",
        "Help set a quit date if appropriate",
        "Arrange follow-up"
      ],
      interpersonalSkills: [
        "Maintain non-judgemental approach throughout",
        "Use open questions",
        "Demonstrate active listening",
        "Show empathy and understanding",
        "Summarise and check understanding",
        "Offer opportunity for questions"
      ]
    },
    markingScheme: [
      {
        title: "Opening",
        items: [
          { id: "1-1", text: "Introduced self and role" },
          { id: "1-2", text: "Checked patient name and DOB" },
          { id: "1-3", text: "Explained reason for appointment" },
          { id: "1-4", text: "Friendly and respectful manner" }
        ]
      },
      {
        title: "Understanding & Concerns",
        items: [
          { id: "1-5", text: "Asked what patient thinks about smoking" },
          { id: "1-6", text: "Asked about worries with quitting" },
          { id: "1-7", text: "Asked what patient wants from appointment" }
        ]
      },
      {
        title: "Smoking History",
        items: [
          { id: "1-8", text: "Asked how long patient has smoked" },
          { id: "1-9", text: "Asked how much they smoke" },
          { id: "1-10", text: "Asked type of smoking" },
          { id: "1-11", text: "Asked when they smoke most" },
          { id: "1-12", text: "Asked time to first cigarette" },
          { id: "1-13", text: "Asked how smoking makes them feel" },
          { id: "1-14", text: "Asked effect on relationships" },
          { id: "1-15", text: "Asked money spent" },
          { id: "1-16", text: "Asked about past quit attempts" },
          { id: "1-17", text: "Asked about withdrawal symptoms" }
        ]
      },
      {
        title: "Health & Social Background",
        items: [
          { id: "1-18", text: "Asked about medical conditions" },
          { id: "1-19", text: "Asked about medications / nicotine products" },
          { id: "1-20", text: "Asked about family history" },
          { id: "1-21", text: "Asked about job and stress" },
          { id: "1-22", text: "Asked about home life / support" },
          { id: "1-23", text: "Asked about alcohol" },
          { id: "1-24", text: "Asked about drugs" },
          { id: "1-25", text: "Asked about exercise / lifestyle" }
        ]
      },
      {
        title: "Advice & Support",
        items: [
          { id: "1-26", text: "Explained health risks simply" },
          { id: "1-27", text: "Non-judgemental and supportive" },
          { id: "1-28", text: "Asked motivation score (1–10)" },
          { id: "1-29", text: "Suggested quitting or reducing" },
          { id: "1-30", text: "Mentioned nicotine replacement" },
          { id: "1-31", text: "Mentioned NHS stop-smoking services" }
        ]
      },
      {
        title: "Planning",
        items: [
          { id: "1-32", text: "Discussed coping with cravings and stress" },
          { id: "1-33", text: "Suggested setting a quit date" },
          { id: "1-34", text: "Offered follow-up appointment" }
        ]
      },
      {
        title: "Closing",
        items: [
          { id: "1-35", text: "Summarised discussion" },
          { id: "1-36", text: "Asked if patient had questions" },
          { id: "1-37", text: "Thanked patient" }
        ]
      },
      {
        title: "Overall Impression",
        items: [
          { id: "1-38", text: "Clear" },
          { id: "1-39", text: "Calm" },
          { id: "1-40", text: "Supportive" },
          { id: "1-41", text: "Easy to understand" }
        ]
      }
    ]
  },
  {
    id: 2,
    stationNumber: 2,
    title: "Smoking Cessation - New Mother",
    patientName: "Sarah Collins",
    patientDOB: "14 March 1992",
    reasonForVisit: "My health visitor suggested I speak to someone about smoking",
    patientScript: {
      opening: [
        "Hi, yes that's me.",
        "I was told this might help."
      ],
      ideasConcernsExpectations: [
        { question: "What do you think about smoking?", answer: "I hate that I smoke, especially around my baby. I feel guilty all the time." },
        { question: "Concerns about quitting?", answer: "I'm scared I'll put on weight and won't be able to cope with the stress of a newborn." },
        { question: "What are you hoping for today?", answer: "I want to find something that actually works for me." }
      ],
      smokingHistory: [
        { question: "How long have you smoked?", answer: "Since I was 16, so about 12 years." },
        { question: "How much do you smoke?", answer: "About 15 a day, sometimes more when stressed." },
        { question: "Type?", answer: "Roll-ups mostly, cheaper that way." },
        { question: "When do you smoke the most?", answer: "After feeds, when the baby's asleep, and when I'm feeling overwhelmed." },
        { question: "How soon after waking?", answer: "About 20-30 minutes, after I've sorted the baby." },
        { question: "How does smoking make you feel?", answer: "It's my only break. Five minutes of peace." },
        { question: "Effect on relationships?", answer: "My partner doesn't smoke and keeps asking me to quit." },
        { question: "Money spent?", answer: "Around £40 a week on tobacco." },
        { question: "Tried quitting before?", answer: "Yes, during pregnancy. I managed for 4 months." },
        { question: "What method did you use?", answer: "I used nicotine patches. They helped a lot during pregnancy." },
        { question: "What made you relapse?", answer: "Started again two weeks after giving birth. The sleep deprivation was awful." },
        { question: "Withdrawal symptoms?", answer: "Mood swings, snacking constantly, couldn't concentrate." }
      ],
      pastMedicalHistory: [
        "I had postnatal blues but nothing diagnosed.",
        "Sometimes I feel quite low still."
      ],
      medications: [
        "Just vitamins.",
        "I used patches during pregnancy but stopped when I gave birth.",
        "Allergies: Yes, Penicillin (causes a rash)."
      ],
      familyHistory: [
        "My mum has COPD from smoking.",
        "My nan died of lung cancer."
      ],
      socialHistory: [
        { category: "Alcohol", answer: "The odd glass of wine, not much." },
        { category: "Recreational drugs", answer: "No, never." },
        { category: "Work", answer: "I'm on maternity leave. I was a hairdresser." },
        { category: "Home life", answer: "I live with my partner and our 3-month-old baby." },
        { category: "Stress", answer: "Being a new mum is exhausting. I don't get much sleep." },
        { category: "Exercise", answer: "I try to walk with the pram when I can." },
        { category: "Support", answer: "My partner and my mum are supportive." }
      ],
      motivation: [
        { question: "Motivation score (1–10)?", answer: "I'd say 8. Seeing my mum struggle with breathing scares me." },
        { question: "Are you aware of the medical risks of smoking?", answer: "Yes, my mum has COPD and my nan died of lung cancer. I know what it can do." },
        { question: "If PA explains support", answer: "I'd really like to try the medication if it's safe while breastfeeding." }
      ],
      ending: [
        "Thank you for being understanding.",
        "I want to do this for my daughter.",
        "When can I start?"
      ]
    },
    candidateInstructions: [
      "You are a <strong>physician associate</strong> working in a GP surgery",
      "A <strong>32-year-old woman</strong> has been referred by her health visitor",
      "She is a <strong>new mother</strong> with a 3-month-old baby",
      "Her presenting concern is <strong>smoking cessation counselling</strong>",
      "Please take a <strong>history</strong> and provide appropriate <strong>advice and support</strong>",
      "At the end of the station, the examiner may ask you some <strong>further questions</strong>"
    ],
    candidateScript: {
      introduction: [
        "Introduce yourself with name and role",
        "Confirm patient identity (name and DOB)",
        "Explain the purpose of the consultation",
        "Obtain consent to proceed"
      ],
      dataGathering: [
        "Explore patient's ideas about smoking",
        "Explore concerns about quitting (weight, coping)",
        "Explore expectations from consultation",
        "Take comprehensive smoking history",
        "Assess nicotine dependence",
        "Explore previous quit attempts (especially during pregnancy)",
        "Screen for postnatal depression",
        "Explore social circumstances and new mother challenges"
      ],
      clinicalManagement: [
        "Acknowledge difficulty of being a new mother",
        "Discuss impact of passive smoking on baby",
        "Discuss breastfeeding-safe cessation options",
        "Address weight concerns with practical advice",
        "Discuss alternative coping strategies",
        "Refer to NHS Stop Smoking Services",
        "Consider mental health support if needed",
        "Arrange follow-up"
      ],
      interpersonalSkills: [
        "Maintain non-judgemental approach",
        "Acknowledge guilt and validate feelings",
        "Demonstrate empathy for new mother stress",
        "Use motivational interviewing techniques",
        "Summarise and check understanding",
        "Offer opportunity for questions"
      ]
    },
    markingScheme: [
      {
        title: "Opening",
        items: [
          { id: "2-1", text: "Introduced self and role" },
          { id: "2-2", text: "Checked patient name and DOB" },
          { id: "2-3", text: "Explained reason for appointment" },
          { id: "2-4", text: "Friendly and respectful manner" }
        ]
      },
      {
        title: "Understanding & Concerns",
        items: [
          { id: "2-5", text: "Asked what patient thinks about smoking" },
          { id: "2-6", text: "Asked about worries with quitting" },
          { id: "2-7", text: "Asked what patient wants from appointment" }
        ]
      },
      {
        title: "Smoking History",
        items: [
          { id: "2-8", text: "Asked how long patient has smoked" },
          { id: "2-9", text: "Asked how much they smoke" },
          { id: "2-10", text: "Asked type of smoking" },
          { id: "2-11", text: "Asked when they smoke most" },
          { id: "2-12", text: "Asked time to first cigarette" },
          { id: "2-13", text: "Asked how smoking makes them feel" },
          { id: "2-14", text: "Asked effect on relationships" },
          { id: "2-15", text: "Asked money spent" },
          { id: "2-16", text: "Asked about past quit attempts" },
          { id: "2-17", text: "Asked about withdrawal symptoms" }
        ]
      },
      {
        title: "Health & Social Background",
        items: [
          { id: "2-18", text: "Asked about medical conditions" },
          { id: "2-19", text: "Asked about medications / nicotine products" },
          { id: "2-20", text: "Asked about family history" },
          { id: "2-21", text: "Asked about job and stress" },
          { id: "2-22", text: "Asked about home life / support" },
          { id: "2-23", text: "Asked about alcohol" },
          { id: "2-24", text: "Asked about drugs" },
          { id: "2-25", text: "Asked about exercise / lifestyle" }
        ]
      },
      {
        title: "Advice & Support",
        items: [
          { id: "2-26", text: "Explained health risks simply" },
          { id: "2-27", text: "Non-judgemental and supportive" },
          { id: "2-28", text: "Asked motivation score (1–10)" },
          { id: "2-29", text: "Suggested quitting or reducing" },
          { id: "2-30", text: "Mentioned nicotine replacement" },
          { id: "2-31", text: "Mentioned NHS stop-smoking services" }
        ]
      },
      {
        title: "Planning",
        items: [
          { id: "2-32", text: "Discussed coping with cravings and stress" },
          { id: "2-33", text: "Suggested setting a quit date" },
          { id: "2-34", text: "Offered follow-up appointment" }
        ]
      },
      {
        title: "Closing",
        items: [
          { id: "2-35", text: "Summarised discussion" },
          { id: "2-36", text: "Asked if patient had questions" },
          { id: "2-37", text: "Thanked patient" }
        ]
      },
      {
        title: "Overall Impression",
        items: [
          { id: "2-38", text: "Clear" },
          { id: "2-39", text: "Calm" },
          { id: "2-40", text: "Supportive" },
          { id: "2-41", text: "Easy to understand" }
        ]
      }
    ]
  },
  {
    id: 3,
    stationNumber: 3,
    title: "Smoking Cessation - Teenager",
    patientName: "Jake Thompson",
    patientDOB: "22 August 2007",
    reasonForVisit: "My mum made me come. She found cigarettes in my bag.",
    patientScript: {
      opening: [
        "Yeah, whatever.",
        "I don't really see the point of this."
      ],
      ideasConcernsExpectations: [
        { question: "What do you think about smoking?", answer: "Everyone does it. It's not that big a deal." },
        { question: "Concerns about quitting?", answer: "I don't want to quit. My mates all smoke. I'd look stupid." },
        { question: "What are you hoping for today?", answer: "To get my mum off my back, honestly." }
      ],
      smokingHistory: [
        { question: "How long have you smoked?", answer: "About a year, maybe a bit longer." },
        { question: "How much do you smoke?", answer: "Like 5 or 6 a day. More at parties." },
        { question: "Type?", answer: "Whatever I can get. Sometimes vapes too." },
        { question: "When do you smoke the most?", answer: "After school, at lunch, weekends with mates." },
        { question: "How soon after waking?", answer: "Not first thing. Maybe mid-morning break." },
        { question: "How does smoking make you feel?", answer: "I dunno. Normal? It's just what we do." },
        { question: "Effect on relationships?", answer: "Mum's really angry. Dad doesn't know." },
        { question: "Money spent?", answer: "My mates share. Maybe £10-15 a week." },
        { question: "Tried quitting before?", answer: "Nah, never tried. Don't want to." },
        { question: "What method did you use?", answer: "N/A - never tried to quit." },
        { question: "What made you relapse?", answer: "N/A" },
        { question: "Withdrawal symptoms?", answer: "I get a bit moody if I can't smoke for a while." }
      ],
      pastMedicalHistory: [
        "I had asthma when I was little but I don't use an inhaler anymore.",
        "I'm fine, never been to hospital or anything."
      ],
      medications: [
        "Nothing.",
        "I've tried vaping but cigarettes are easier to hide.",
        "Allergies: No known allergies."
      ],
      familyHistory: [
        "Grandad smoked and he's fine.",
        "Mum quit years ago."
      ],
      socialHistory: [
        { category: "Alcohol", answer: "Sometimes at parties." },
        { category: "Recreational drugs", answer: "I've tried weed once or twice but I don't like it." },
        { category: "Work", answer: "I'm in Year 11, doing GCSEs." },
        { category: "Home life", answer: "I live with my mum and younger sister." },
        { category: "Stress", answer: "School's stressful. Exams coming up." },
        { category: "Exercise", answer: "I play football but I've been getting out of breath lately." },
        { category: "Support", answer: "My mates wouldn't get it. Maybe my mum if she wasn't so angry." }
      ],
      motivation: [
        { question: "Motivation score (1–10)?", answer: "Like a 2 or 3. I don't really want to stop." },
        { question: "Are you aware of the medical risks of smoking?", answer: "Yeah, they tell us at school. Cancer and stuff. But that's when you're old, isn't it?" },
        { question: "If PA explains support", answer: "(After discussion about football) ...Actually the breathing thing is annoying. Maybe I could cut down." }
      ],
      ending: [
        "Alright, I'll think about it.",
        "Can you not tell my mum everything I said?",
        "Thanks, I guess."
      ]
    },
    candidateInstructions: [
      "You are a <strong>physician associate</strong> working in a GP surgery",
      "A <strong>17-year-old male</strong> has been brought in by his mother",
      "His mother found cigarettes in his bag and is concerned",
      "His presenting concern is <strong>smoking cessation counselling</strong>",
      "Please take a <strong>history</strong> and provide appropriate <strong>advice and support</strong>",
      "At the end of the station, the examiner may ask you some <strong>further questions</strong>"
    ],
    candidateScript: {
      introduction: [
        "Introduce yourself with name and role",
        "Confirm patient identity (name and DOB)",
        "Establish confidentiality boundaries",
        "Build rapport before diving into smoking"
      ],
      dataGathering: [
        "Explore understanding of why they're here",
        "Understand peer influences",
        "Take smoking history without judgement",
        "Ask about vaping as well as cigarettes",
        "Explore impact on activities (sports)",
        "Assess for other substance use",
        "Understand family dynamics",
        "Explore school stress"
      ],
      clinicalManagement: [
        "Acknowledge difficulty of being different from peers",
        "Focus on immediate concerns (fitness, money)",
        "Avoid lecturing approach",
        "Plant seeds for future change",
        "Discuss harm reduction if not ready to quit",
        "Offer information to take away",
        "Discuss confidentiality with parents",
        "Leave door open for future support"
      ],
      interpersonalSkills: [
        "Meet patient where they are",
        "Avoid confrontational approach",
        "Respect autonomy",
        "Use age-appropriate language",
        "Build therapeutic relationship",
        "Don't force behaviour change"
      ]
    },
    markingScheme: [
      {
        title: "Opening",
        items: [
          { id: "3-1", text: "Introduced self and role" },
          { id: "3-2", text: "Checked patient name and DOB" },
          { id: "3-3", text: "Explained reason for appointment" },
          { id: "3-4", text: "Friendly and respectful manner" }
        ]
      },
      {
        title: "Understanding & Concerns",
        items: [
          { id: "3-5", text: "Asked what patient thinks about smoking" },
          { id: "3-6", text: "Asked about worries with quitting" },
          { id: "3-7", text: "Asked what patient wants from appointment" }
        ]
      },
      {
        title: "Smoking History",
        items: [
          { id: "3-8", text: "Asked how long patient has smoked" },
          { id: "3-9", text: "Asked how much they smoke" },
          { id: "3-10", text: "Asked type of smoking" },
          { id: "3-11", text: "Asked when they smoke most" },
          { id: "3-12", text: "Asked time to first cigarette" },
          { id: "3-13", text: "Asked how smoking makes them feel" },
          { id: "3-14", text: "Asked effect on relationships" },
          { id: "3-15", text: "Asked money spent" },
          { id: "3-16", text: "Asked about past quit attempts" },
          { id: "3-17", text: "Asked about withdrawal symptoms" }
        ]
      },
      {
        title: "Health & Social Background",
        items: [
          { id: "3-18", text: "Asked about medical conditions" },
          { id: "3-19", text: "Asked about medications / nicotine products" },
          { id: "3-20", text: "Asked about family history" },
          { id: "3-21", text: "Asked about school and stress" },
          { id: "3-22", text: "Asked about home life / support" },
          { id: "3-23", text: "Asked about alcohol" },
          { id: "3-24", text: "Asked about drugs" },
          { id: "3-25", text: "Asked about exercise / lifestyle" }
        ]
      },
      {
        title: "Advice & Support",
        items: [
          { id: "3-26", text: "Explained health risks simply" },
          { id: "3-27", text: "Non-judgemental and supportive" },
          { id: "3-28", text: "Asked motivation score (1–10)" },
          { id: "3-29", text: "Suggested quitting or reducing" },
          { id: "3-30", text: "Mentioned nicotine replacement" },
          { id: "3-31", text: "Mentioned NHS stop-smoking services" }
        ]
      },
      {
        title: "Planning",
        items: [
          { id: "3-32", text: "Discussed coping with cravings and stress" },
          { id: "3-33", text: "Suggested setting a quit date" },
          { id: "3-34", text: "Offered follow-up appointment" }
        ]
      },
      {
        title: "Closing",
        items: [
          { id: "3-35", text: "Summarised discussion" },
          { id: "3-36", text: "Asked if patient had questions" },
          { id: "3-37", text: "Thanked patient" }
        ]
      },
      {
        title: "Overall Impression",
        items: [
          { id: "3-38", text: "Clear" },
          { id: "3-39", text: "Calm" },
          { id: "3-40", text: "Supportive" },
          { id: "3-41", text: "Easy to understand" }
        ]
      }
    ]
  },
  {
    id: 4,
    stationNumber: 4,
    title: "Smoking Cessation - COPD Patient",
    patientName: "Margaret O'Brien",
    patientDOB: "3 January 1958",
    reasonForVisit: "The doctor said I need to stop smoking because of my chest",
    patientScript: {
      opening: [
        "Hello, yes that's me.",
        "I know what you're going to say."
      ],
      ideasConcernsExpectations: [
        { question: "What do you think about smoking?", answer: "I know it's killing me. I've been told enough times. But after 50 years, it's hard." },
        { question: "Concerns about quitting?", answer: "What's the point now? The damage is done. And I've tried everything." },
        { question: "What are you hoping for today?", answer: "Honestly? I'm not sure anything will help. But my daughter keeps pushing me." }
      ],
      smokingHistory: [
        { question: "How long have you smoked?", answer: "Since I was 15. Over 50 years." },
        { question: "How much do you smoke?", answer: "About 30 a day. Used to be more." },
        { question: "Type?", answer: "Normal cigarettes. Tried menthol before they banned them." },
        { question: "When do you smoke the most?", answer: "All the time. First thing, with tea, after meals, watching telly." },
        { question: "How soon after waking?", answer: "Immediately. It's the first thing I do." },
        { question: "How does smoking make you feel?", answer: "It's just part of me. I can't imagine life without it." },
        { question: "Effect on relationships?", answer: "My husband died of lung cancer. My kids hate that I still smoke." },
        { question: "Money spent?", answer: "About £100 a week. I know it's ridiculous." },
        { question: "Tried quitting before?", answer: "More times than I can count." },
        { question: "What method did you use?", answer: "Patches, gum, that Champix, hypnotherapy... I've tried everything." },
        { question: "What made you relapse?", answer: "Nothing worked for more than a few weeks. The cravings always win." },
        { question: "Withdrawal symptoms?", answer: "Terrible. Shaking, can't sleep, feel like I'm going mad." }
      ],
      pastMedicalHistory: [
        "COPD - I'm on inhalers, two different ones.",
        "I've had three chest infections this year already.",
        "High blood pressure too."
      ],
      medications: [
        "Spiriva and Fostair inhalers.",
        "Amlodipine for blood pressure.",
        "I've tried Champix twice - made me feel sick.",
        "Allergies: Yes, Amoxicillin (swelling)."
      ],
      familyHistory: [
        "My husband died of lung cancer at 62.",
        "My brother has emphysema."
      ],
      socialHistory: [
        { category: "Alcohol", answer: "A sherry at Christmas, that's about it." },
        { category: "Recreational drugs", answer: "No, never." },
        { category: "Work", answer: "I'm retired. Used to work in a factory." },
        { category: "Home life", answer: "I live alone since my husband passed. My daughter visits weekly." },
        { category: "Stress", answer: "I get lonely. Smoking is company in a way." },
        { category: "Exercise", answer: "I can barely walk to the shops without getting breathless." },
        { category: "Support", answer: "My daughter would help. She's very supportive." }
      ],
      motivation: [
        { question: "Motivation score (1–10)?", answer: "Maybe a 5. I want to see my grandchildren grow up." },
        { question: "Are you aware of the medical risks of smoking?", answer: "I know it all too well. My husband died of lung cancer. And look at me with my COPD." },
        { question: "If PA explains support", answer: "...I suppose if there's something new I haven't tried. I don't want to end up like Harold." }
      ],
      ending: [
        "Alright, I'll give it another go.",
        "But if this doesn't work, I'm done trying.",
        "Thank you for listening."
      ]
    },
    candidateInstructions: [
      "You are a <strong>physician associate</strong> working in a GP surgery",
      "A <strong>66-year-old woman</strong> has been referred by her GP",
      "She has a diagnosis of <strong>COPD</strong> and continues to smoke",
      "Her presenting concern is <strong>smoking cessation counselling</strong>",
      "Please take a <strong>history</strong> and provide appropriate <strong>advice and support</strong>",
      "At the end of the station, the examiner may ask you some <strong>further questions</strong>"
    ],
    candidateScript: {
      introduction: [
        "Introduce yourself with name and role",
        "Confirm patient identity (name and DOB)",
        "Acknowledge the difficulty of the situation",
        "Express understanding of long smoking history"
      ],
      dataGathering: [
        "Explore beliefs about smoking and quitting",
        "Understand previous quit attempts in detail",
        "Assess current level of dependence",
        "Review COPD management and symptoms",
        "Explore social isolation and loneliness",
        "Understand family dynamics and motivation",
        "Assess mental health",
        "Review current medications and contraindications"
      ],
      clinicalManagement: [
        "Acknowledge difficulty after 50 years",
        "Counter hopelessness - benefits at any age",
        "Discuss how quitting slows COPD progression",
        "Review pharmacological options considering history",
        "Discuss combination therapy",
        "Address loneliness - stop smoking groups",
        "Consider referral to pulmonary rehabilitation",
        "Involve daughter in quit plan if appropriate"
      ],
      interpersonalSkills: [
        "Show genuine empathy",
        "Acknowledge grief (husband)",
        "Avoid judgement despite long history",
        "Address nihilism therapeutically",
        "Respect autonomy while encouraging change",
        "Build hope without false promises"
      ]
    },
    markingScheme: [
      {
        title: "Opening",
        items: [
          { id: "4-1", text: "Introduced self and role" },
          { id: "4-2", text: "Checked patient name and DOB" },
          { id: "4-3", text: "Explained reason for appointment" },
          { id: "4-4", text: "Friendly and respectful manner" }
        ]
      },
      {
        title: "Understanding & Concerns",
        items: [
          { id: "4-5", text: "Asked what patient thinks about smoking" },
          { id: "4-6", text: "Asked about worries with quitting" },
          { id: "4-7", text: "Asked what patient wants from appointment" }
        ]
      },
      {
        title: "Smoking History",
        items: [
          { id: "4-8", text: "Asked how long patient has smoked" },
          { id: "4-9", text: "Asked how much they smoke" },
          { id: "4-10", text: "Asked type of smoking" },
          { id: "4-11", text: "Asked when they smoke most" },
          { id: "4-12", text: "Asked time to first cigarette" },
          { id: "4-13", text: "Asked how smoking makes them feel" },
          { id: "4-14", text: "Asked effect on relationships" },
          { id: "4-15", text: "Asked money spent" },
          { id: "4-16", text: "Asked about past quit attempts" },
          { id: "4-17", text: "Asked about withdrawal symptoms" }
        ]
      },
      {
        title: "Health & Social Background",
        items: [
          { id: "4-18", text: "Asked about medical conditions" },
          { id: "4-19", text: "Asked about medications / nicotine products" },
          { id: "4-20", text: "Asked about family history" },
          { id: "4-21", text: "Asked about job and stress" },
          { id: "4-22", text: "Asked about home life / support" },
          { id: "4-23", text: "Asked about alcohol" },
          { id: "4-24", text: "Asked about drugs" },
          { id: "4-25", text: "Asked about exercise / lifestyle" }
        ]
      },
      {
        title: "Advice & Support",
        items: [
          { id: "4-26", text: "Explained health risks simply" },
          { id: "4-27", text: "Non-judgemental and supportive" },
          { id: "4-28", text: "Asked motivation score (1–10)" },
          { id: "4-29", text: "Suggested quitting or reducing" },
          { id: "4-30", text: "Mentioned nicotine replacement" },
          { id: "4-31", text: "Mentioned NHS stop-smoking services" }
        ]
      },
      {
        title: "Planning",
        items: [
          { id: "4-32", text: "Discussed coping with cravings and stress" },
          { id: "4-33", text: "Suggested setting a quit date" },
          { id: "4-34", text: "Offered follow-up appointment" }
        ]
      },
      {
        title: "Closing",
        items: [
          { id: "4-35", text: "Summarised discussion" },
          { id: "4-36", text: "Asked if patient had questions" },
          { id: "4-37", text: "Thanked patient" }
        ]
      },
      {
        title: "Overall Impression",
        items: [
          { id: "4-38", text: "Clear" },
          { id: "4-39", text: "Calm" },
          { id: "4-40", text: "Supportive" },
          { id: "4-41", text: "Easy to understand" }
        ]
      }
    ]
  },
  {
    id: 5,
    stationNumber: 5,
    title: "Smoking Cessation - Pregnant Woman",
    patientName: "Priya Sharma",
    patientDOB: "19 July 1995",
    reasonForVisit: "The midwife referred me because I'm still smoking",
    patientScript: {
      opening: [
        "Yes, hello.",
        "I know I shouldn't be smoking."
      ],
      ideasConcernsExpectations: [
        { question: "What do you think about smoking?", answer: "I feel terrible about it. I know it's harming the baby. I just can't seem to stop." },
        { question: "Concerns about quitting?", answer: "I'm stressed about the pregnancy and smoking is the only thing that calms me down. I'm scared the stress will be worse for the baby." },
        { question: "What are you hoping for today?", answer: "I need help. Something that's safe for the baby." }
      ],
      smokingHistory: [
        { question: "How long have you smoked?", answer: "About 8 years, since university." },
        { question: "How much do you smoke?", answer: "I've cut down to about 8 a day. It was 15 before I got pregnant." },
        { question: "Type?", answer: "Cigarettes. I tried switching to vaping but it didn't feel the same." },
        { question: "When do you smoke the most?", answer: "Morning and evening mainly. When my husband's at work." },
        { question: "How soon after waking?", answer: "About an hour. I try to delay it." },
        { question: "How does smoking make you feel?", answer: "Guilty. But also calmer. It's complicated." },
        { question: "Effect on relationships?", answer: "My husband doesn't know I'm still smoking. I hide it." },
        { question: "Money spent?", answer: "About £30 a week, less than before." },
        { question: "Tried quitting before?", answer: "I tried when I found out I was pregnant. Lasted two weeks." },
        { question: "What method did you use?", answer: "I tried going cold turkey. I was too scared to use anything in case it harmed the baby." },
        { question: "What made you relapse?", answer: "I had a scan and got anxious. Started again that evening." },
        { question: "Withdrawal symptoms?", answer: "Anxiety, really bad anxiety. And I couldn't sleep." }
      ],
      pastMedicalHistory: [
        "I have anxiety - I used to take medication but stopped when I got pregnant.",
        "Otherwise healthy. This is my first pregnancy, I'm 20 weeks."
      ],
      medications: [
        "Just pregnancy vitamins.",
        "I stopped my sertraline when I found out I was pregnant. GP said it was okay to continue but I was worried.",
        "Allergies: No known allergies."
      ],
      familyHistory: [
        "My mum has anxiety too.",
        "No serious illnesses in the family."
      ],
      socialHistory: [
        { category: "Alcohol", answer: "None since I found out I was pregnant." },
        { category: "Recreational drugs", answer: "No, never." },
        { category: "Work", answer: "I'm an accountant, working from home now." },
        { category: "Home life", answer: "I live with my husband. He's excited about the baby." },
        { category: "Stress", answer: "Very stressed. First pregnancy, working full time, anxious about everything." },
        { category: "Exercise", answer: "Pregnancy yoga once a week." },
        { category: "Support", answer: "My husband would support me but I'd have to tell him first." }
      ],
      motivation: [
        { question: "Motivation score (1–10)?", answer: "9. I really want to stop. I just need help." },
        { question: "Are you aware of the medical risks of smoking?", answer: "Yes, I know it can harm the baby - low birth weight, premature birth. That's what scares me the most." },
        { question: "If PA explains support", answer: "I didn't know patches were safe in pregnancy. That's really helpful. And maybe I should talk to someone about my anxiety too." }
      ],
      ending: [
        "Thank you so much.",
        "I'm going to tell my husband tonight.",
        "Can I come back and see you?"
      ]
    },
    candidateInstructions: [
      "You are a <strong>physician associate</strong> working in a GP surgery",
      "A <strong>29-year-old woman</strong> has been referred by her midwife",
      "She is <strong>20 weeks pregnant</strong> and continues to smoke",
      "Her presenting concern is <strong>smoking cessation counselling</strong>",
      "Please take a <strong>history</strong> and provide appropriate <strong>advice and support</strong>",
      "At the end of the station, the examiner may ask you some <strong>further questions</strong>"
    ],
    candidateScript: {
      introduction: [
        "Introduce yourself with name and role",
        "Confirm patient identity (name and DOB)",
        "Create safe, non-judgemental space",
        "Acknowledge difficulty of situation"
      ],
      dataGathering: [
        "Explore feelings about smoking during pregnancy",
        "Understand anxiety and its management",
        "Take smoking history including attempts to reduce",
        "Explore secrecy from husband",
        "Review mental health history",
        "Understand previous sertraline use",
        "Explore social support available",
        "Assess stage of pregnancy"
      ],
      clinicalManagement: [
        "Discuss risks of smoking in pregnancy specifically",
        "Explain NRT safety in pregnancy",
        "Address anxiety management - discuss sertraline safety",
        "Discuss alternative coping strategies",
        "Recommend specialist stop smoking in pregnancy service",
        "Encourage disclosure to husband for support",
        "Consider referral to perinatal mental health",
        "Arrange close follow-up"
      ],
      interpersonalSkills: [
        "Avoid adding to guilt",
        "Acknowledge patient's efforts to cut down",
        "Show understanding of anxiety",
        "Support autonomy in decision about husband",
        "Provide hope - many women quit successfully",
        "Be encouraging and supportive"
      ]
    },
    markingScheme: [
      {
        title: "Opening",
        items: [
          { id: "5-1", text: "Introduced self and role" },
          { id: "5-2", text: "Checked patient name and DOB" },
          { id: "5-3", text: "Explained reason for appointment" },
          { id: "5-4", text: "Friendly and respectful manner" }
        ]
      },
      {
        title: "Understanding & Concerns",
        items: [
          { id: "5-5", text: "Asked what patient thinks about smoking" },
          { id: "5-6", text: "Asked about worries with quitting" },
          { id: "5-7", text: "Asked what patient wants from appointment" }
        ]
      },
      {
        title: "Smoking History",
        items: [
          { id: "5-8", text: "Asked how long patient has smoked" },
          { id: "5-9", text: "Asked how much they smoke" },
          { id: "5-10", text: "Asked type of smoking" },
          { id: "5-11", text: "Asked when they smoke most" },
          { id: "5-12", text: "Asked time to first cigarette" },
          { id: "5-13", text: "Asked how smoking makes them feel" },
          { id: "5-14", text: "Asked effect on relationships" },
          { id: "5-15", text: "Asked money spent" },
          { id: "5-16", text: "Asked about past quit attempts" },
          { id: "5-17", text: "Asked about withdrawal symptoms" }
        ]
      },
      {
        title: "Health & Social Background",
        items: [
          { id: "5-18", text: "Asked about medical conditions" },
          { id: "5-19", text: "Asked about medications / nicotine products" },
          { id: "5-20", text: "Asked about family history" },
          { id: "5-21", text: "Asked about job and stress" },
          { id: "5-22", text: "Asked about home life / support" },
          { id: "5-23", text: "Asked about alcohol" },
          { id: "5-24", text: "Asked about drugs" },
          { id: "5-25", text: "Asked about exercise / lifestyle" }
        ]
      },
      {
        title: "Advice & Support",
        items: [
          { id: "5-26", text: "Explained health risks simply" },
          { id: "5-27", text: "Non-judgemental and supportive" },
          { id: "5-28", text: "Asked motivation score (1–10)" },
          { id: "5-29", text: "Suggested quitting or reducing" },
          { id: "5-30", text: "Mentioned nicotine replacement" },
          { id: "5-31", text: "Mentioned NHS stop-smoking services" }
        ]
      },
      {
        title: "Planning",
        items: [
          { id: "5-32", text: "Discussed coping with cravings and stress" },
          { id: "5-33", text: "Suggested setting a quit date" },
          { id: "5-34", text: "Offered follow-up appointment" }
        ]
      },
      {
        title: "Closing",
        items: [
          { id: "5-35", text: "Summarised discussion" },
          { id: "5-36", text: "Asked if patient had questions" },
          { id: "5-37", text: "Thanked patient" }
        ]
      },
      {
        title: "Overall Impression",
        items: [
          { id: "5-38", text: "Clear" },
          { id: "5-39", text: "Calm" },
          { id: "5-40", text: "Supportive" },
          { id: "5-41", text: "Easy to understand" }
        ]
      }
    ]
  }
];
