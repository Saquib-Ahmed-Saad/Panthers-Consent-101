
import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import PantherPaw from './PantherPaw';
import './App.css';
import Conclusion from './Conclusion';


function Home({ onStart }) {
  return (
    <div>
      <h1>Panther’s Consent 101</h1>
      <h3>Learn consent through realistic, interactive scenarios.</h3>
      <p>Welcome to Panther’s Consent 101, an app designed for GSU students to practice identifying consent, recognizing red flags, and making safe, respectful decisions in real-life situations.</p>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li>🐾 Scenario-based consent learning</li>
        <li>📱 Mobile-friendly interactive choices</li>
        <li>🔒 Education only — no data collected</li>
      </ul>
      <button onClick={onStart} style={{ marginTop: 20 }}>Start Training</button>
      <footer style={{ marginTop: 40, fontSize: '0.9em', color: '#555' }}>
        Created for the PantherLeap Capstone Initiative.
      </footer>
    </div>
  );
}

function ConsentInfo({ onBegin, onBack }) {
  return (
    <div>
      <h2>What Is Consent?</h2>
      <p><b>Consent</b> is a clear, enthusiastic, and freely-given “YES” to any activity.<br />If it’s not an enthusiastic yes, it’s a no.</p>
      <div style={{ margin: '20px 0' }}>
        <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 10, marginBottom: 10 }}>
          <b>1. Consent Must Be Clear</b>
          <ul>
            <li>A person must communicate yes verbally or non-verbally.</li>
            <li>Silence, freezing, or uncertainty is not consent.</li>
          </ul>
        </div>
        <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 10, marginBottom: 10 }}>
          <b>2. Consent Must Be Freely Given</b>
          <ul>
            <li>Consent cannot happen if someone is:</li>
            <li>Drunk or high</li>
            <li>Pressured</li>
            <li>Manipulated</li>
            <li>Afraid to say no</li>
            <li>Asleep or unconscious</li>
          </ul>
        </div>
        <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 10, marginBottom: 10 }}>
          <b>3. Consent Can Be Withdrawn Anytime</b>
          <ul>
            <li>Even in a relationship or in the middle of something, a person can say:</li>
            <li>“I don’t feel comfortable anymore.”</li>
            <li>You must stop immediately.</li>
          </ul>
        </div>
        <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 10, marginBottom: 10 }}>
          <b>4. Consent Is Specific</b>
          <ul>
            <li>Agreeing to one thing does NOT mean agreeing to everything.</li>
          </ul>
        </div>
      </div>
      <div style={{ border: '2px solid #1976d2', borderRadius: 8, padding: 10, marginBottom: 20 }}>
        <b>The “Yes Checklist”:</b>
        <ul>
          <li>Voluntary</li>
          <li>Enthusiastic</li>
          <li>Sober</li>
          <li>Informed</li>
          <li>Reversible</li>
        </ul>
        <p>If any of these are missing, it’s not consent.</p>
      </div>
      <button onClick={onBegin} style={{ marginRight: 10 }}>Begin Scenarios</button>
      <button onClick={onBack}>Back</button>
    </div>
  );
}

// Quiz scenarios data
const scenarios = [
    {
      title: 'Mixed Signals Invite',
      situation: `You and Taylor have been flirting for weeks. You finally hang out in your dorm. You sit close, and Taylor says: “I really like being around you… I’m just a little nervous.” They smile but keep fidgeting with their hands.`,
      question: 'What do you do next?',
      options: [
        {
          text: 'A. “No worries! You don’t have to be nervous — I promise I’ll be gentle.”',
          correct: false,
          feedback: '❌ Incorrect. It sounds reassuring, but it subtly implies you’re moving forward regardless of their nervousness. It ignores the underlying discomfort.'
        },
        {
          text: 'B. “Do you want to slow down and just hang out? We don’t have to do anything.”',
          correct: true,
          feedback: '✅ Correct. You take pressure off the situation, center their comfort, and explicitly allow them to opt out. This respects consent.'
        },
        {
          text: 'C. “If you’re nervous, let’s just try a little and see how it goes.”',
          correct: false,
          feedback: '❌ Incorrect. It sounds gentle, but it pushes them toward something they’re uncertain about. “Nervous” + “try a little” = consent based on pressure, not clarity.'
        }
      ]
    },
    {
      title: 'Prior Agreement Trap',
      situation: `You and Chris previously talked about maybe hooking up sometime. Tonight, Chris comes over to watch a movie. Midway through, they become quiet and say: “I know we talked about it earlier… but I’m honestly not sure anymore.”`,
      question: 'What do you do?',
      options: [
        {
          text: 'A. “It’s okay — we agreed before, so if you want, we can still go ahead.”',
          correct: false,
          feedback: '❌ Incorrect. It treats past agreement as current consent. Consent can change. “Not sure anymore” = pause everything.'
        },
        {
          text: 'B. “It’s fine, don’t overthink it. We’ll take it slow.”',
          correct: false,
          feedback: '❌ Incorrect. “Don’t overthink it” invalidates their uncertainty, which is a form of subtle pressure.'
        },
        {
          text: 'C. “Totally fine — thanks for telling me. Let’s just focus on the movie.”',
          correct: true,
          feedback: '✅ Correct. It removes pressure, respects the change in feelings, and reinforces that their comfort matters above all.'
        }
      ]
    },
  {
    title: 'Party + Alcohol',
    situation: `You’re at a college party with Jordan. Jordan has had several drinks and is slurring their words. Jordan pulls you toward a bedroom and says: “Come on, let’s have some fun.”`,
    question: 'What do you do?',
    options: [
      {
        text: 'A. Go with Jordan to the bedroom and start making moves.',
        correct: false,
        feedback: '❌ Incorrect. Jordan is clearly intoxicated. A drunk person cannot give real consent. Proceeding would be unsafe and disrespectful.'
      },
      {
        text: 'B. Say, “Hey, you’ve had a lot to drink. Let’s stay out here where it’s safe.”',
        correct: true,
        feedback: '✅ Correct. You acknowledged impairment, avoided isolation, and prioritized safety. This respects consent.'
      },
      {
        text: 'C. Laugh it off and keep flirting/touching without going to the room.',
        correct: false,
        feedback: '❌ Incorrect. Even staying outside, continuing physical contact with someone impaired crosses boundaries.'
      }
    ]
  },
  {
    title: 'Long-Term Partner',
    situation: `You and your partner Alex have been dating a year. You start kissing on the couch. Alex suddenly shifts away and goes quiet.`,
    question: 'What do you do?',
    options: [
      {
        text: 'A. Continue, assuming it’s fine because you’re in a relationship.',
        correct: false,
        feedback: '❌ Incorrect. Relationships do NOT equal automatic consent. Their body language says they’re uncomfortable.'
      },
      {
        text: 'B. Pause and say, “Hey, you went quiet — are you okay? Do you want to stop?”',
        correct: true,
        feedback: '✅ Correct. Checking in shows respect, awareness, and emotional maturity. It centers your partner’s comfort.'
      },
      {
        text: 'C. Say, “You always do this,” and continue.',
        correct: false,
        feedback: '❌ Incorrect. This guilt-tripping invalidates their boundaries. Pressure = no consent.'
      }
    ]
  },
  {
    title: 'Online / Texting',
    situation: `You met Sam on a dating app. You ask for a spicy photo. Sam replies: “Idk, I’m kinda nervous lol.”`,
    question: 'What do you do?',
    options: [
      {
        text: 'A. Say, “Don’t be boring — just send it.”',
        correct: false,
        feedback: '❌ Incorrect. This is pressuring. “Idk” is not an enthusiastic yes.'
      },
      {
        text: 'B. Say, “No worries, I only want you to do what you’re comfortable with.”',
        correct: true,
        feedback: '✅ Correct. You respected their boundary and removed pressure.'
      },
      {
        text: 'C. Send your own photo and say, “Now it’s your turn.”',
        correct: false,
        feedback: '❌ Incorrect. Reciprocity can still be pressure. Consent must be easy to refuse.'
      }
    ]
  }
];

function Quiz({ onFinish, onBack }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showProgress, setShowProgress] = useState(false);
  const scenario = scenarios[current];

  function handleSelect(idx) {
    setSelected(idx);
    setAnswers([...answers, idx]);
    setShowProgress(true);
    setTimeout(() => {
      setSelected(null);
      setShowProgress(false);
      if (current < scenarios.length - 1) {
        setCurrent(current + 1);
      } else {
        onFinish([...answers, idx]);
      }
    }, 3500); // Increased feedback window to 3.5 seconds
  }

  return (
    <div className="fade-in">
      {showProgress && <ProgressBar current={current} total={scenarios.length} />}
      <h2>{scenario.title}</h2>
      <p><b>Situation:</b> {scenario.situation}</p>
      <p><b>{scenario.question}</b></p>
      <div>
        {scenario.options.map((opt, idx) => (
          <div key={idx} style={{ marginBottom: 12 }}>
            <button
              disabled={selected !== null}
              className="animated-btn"
              style={{ width: '100%', padding: 10, background: selected === idx ? '#e3f2fd' : '#fff', border: '1px solid #1976d2', borderRadius: 6 }}
              onClick={() => handleSelect(idx)}
            >
              {opt.text}
            </button>
            {selected === idx && (
              <div style={{ marginTop: 8, fontWeight: 'bold' }}>{opt.feedback}</div>
            )}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20, fontSize: '0.9em', color: '#555' }}>
        Scenario {current + 1} of {scenarios.length}
      </div>
      <button onClick={onBack} className="animated-btn" style={{ marginTop: 20 }}>Back</button>
    </div>
  );
}

function Results({ answers, onRetry, onHome, onBack }) {
  const total = scenarios.length;
  const correct = answers.filter((a, i) => scenarios[i].options[a].correct).length;
  let reflection = '';
  if (correct === total) {
    reflection = 'You demonstrated strong understanding of consent. You consistently respected boundaries, checked in, and avoided pressure.';
  } else if (correct >= 2) {
    reflection = 'You made several good choices, but there were moments where you overlooked body language or added pressure. Awareness grows with practice.';
  } else {
    reflection = 'Consent can be confusing in the moment. This quiz highlights why clarity matters. Review the consent principles and try again to build stronger habits.';
  }
  return (
    <div>
      <h2>Your Results</h2>
      <p>You made {correct} out of {total} consent-respecting choices.</p>
      <p>{reflection}</p>
      <button onClick={onRetry} style={{ marginRight: 10 }}>Try Another Scenario</button>
      <button onClick={onHome} style={{ marginRight: 10 }}>Back to Home</button>
      <button onClick={onBack}>Back</button>
    </div>
  );
}

function Resources({ onBack }) {
  return (
    <div>
      <h2>Resources & Support</h2>
      <h3 style={{ marginTop: 32 }}>Emergency</h3>
      <ul style={{ marginBottom: 32 }}>
        <li>GSU Police: (404) 413-3333 (24/7)</li>
        <li>National Sexual Assault Hotline (RAINN): 1-800-656-4673</li>
        <li>On-call, after-hours emergency: 404-413-1640<br />
          <span style={{ fontSize: '0.95em' }}>Follow the prompts for immediate assistance.</span>
        </li>
      </ul>
      <h3 style={{ marginTop: 32 }}>GSU Campus Support</h3>
      <ul style={{ marginBottom: 32 }}>
        <li style={{ marginBottom: 24 }}>
          <b>Title IX Coordinator</b><br />
          Kieran B. Morrow, J.D., CAAP<br />
          Senior Director, Equity & Civil Rights Compliance | Title IX Coordinator | ADA Coordinator<br />
          75 Piedmont, Ste. 368, Atlanta, GA 30303<br />
          <b>Phone:</b> 404-413-2561<br />
          <b>Email:</b> <a href="mailto:TitleIX@gsu.edu">TitleIX@gsu.edu</a>
        </li>
        <li style={{ marginBottom: 24 }}>
          <b>Counseling Center</b><br />
          75 Piedmont Ave. NE, Suite 200A (Next to University Commons)<br />
          Atlanta, GA 30303<br />
          <b>Phone:</b> 404-413-1930
        </li>
        <li style={{ marginBottom: 24 }}>
          <b>Health Clinic</b><br />
          Downtown Atlanta Campus<br />
          75 Piedmont Avenue NE, Suite 200<br />
          Atlanta, GA 30303<br />
          <b>Phone:</b> 404-413-1930
        </li>
      </ul>
      <h3>Educational Resources</h3>
      <ul>
        <li><a href="https://rainn.org" target="_blank" rel="noopener noreferrer">rainn.org</a> (consent, boundaries, reporting info)</li>
        <li><a href="https://loveisrespect.org" target="_blank" rel="noopener noreferrer">loveisrespect.org</a> (healthy vs unhealthy relationships)</li>
        <li><a href="https://consentculture.com" target="_blank" rel="noopener noreferrer">consentculture.com</a> (consent education)</li>
      </ul>
      <h3>Disclaimer</h3>
      <p>This app is for educational purposes only and does not provide legal advice. If you feel unsafe or unsure, contact the appropriate campus or emergency services.</p>
      <button onClick={onBack} style={{ marginTop: 20 }}>Back</button>
    </div>
  );
}

function App() {
  const [page, setPage] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState(null);
  const [history, setHistory] = useState([]);

  function goTo(newPage) {
    setHistory((h) => [...h, page]);
    setPage(newPage);
  }
  function goBack() {
    setPage(history.length ? history[history.length - 1] : 0);
    setHistory((h) => h.slice(0, -1));
  }
  function goToQuiz() {
    goTo(2);
    setQuizAnswers(null);
  }
  function goToResults(answers) {
    setQuizAnswers(answers);
    setPage(3);
  }

  return (
    <div className="App">
      <PantherPaw />
      <div className="gsu-header" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <img src={process.env.PUBLIC_URL + '/gsu-logo.png'} alt="GSU Panthers Logo" style={{ height: 60 }} />
        <span className="gsu-header-title" style={{ fontSize: '2em', fontWeight: 'bold' }}>Panther’s Consent 101</span>
      </div>
      <nav>
        <button onClick={() => setPage(0)}>Home</button>
        <button onClick={() => setPage(1)}>Consent Info</button>
        <button onClick={() => setPage(4)}>Resources</button>
      </nav>
      <main>
        <div className="gsu-card">
          {page === 0 && <Home onStart={() => goTo(1)} />}
          {page === 1 && <ConsentInfo onBegin={goToQuiz} onBack={goBack} />}
          {page === 2 && !quizAnswers && <Quiz onFinish={goToResults} onBack={goBack} />}
          {page === 3 && quizAnswers && (
            <Conclusion
              score={quizAnswers.filter((a, i) => scenarios[i].options[a].correct).length}
              total={scenarios.length}
            />
          )}
          {page === 4 && <Resources onBack={goBack} />}
        </div>
      </main>
    </div>
  );
}

export default App;
