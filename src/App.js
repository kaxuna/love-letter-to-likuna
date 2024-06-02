import React from 'react';
import { Typography, Paper } from '@mui/material';
import hearts from './assets/hearts.jpg'
import cosmic from './assets/cosmic.jpg'
import fingers from './assets/fingers.jpg'
import clowns from './assets/clowns.jpg'
import cats from './assets/cats.jpg'

const messages = [
  "დღესაც ძალიან მიყვარხართ!!!",
  "ჩემი პატარა ანგელოზი ხართ!!!",
  "ჩემი საყვარელი, ჭკვიანი და ლამაზი გოგონა ბრძანდებით🙈",
  "You give me endless butterflies 🦋🦋🦋",
  "ცუდი გოგო ხარ\n(I'm into that shit) 🤭🤭🤭",
  "N2 მასხარა ხართ მთელ მსოფლიოში 🤡",
  "პლუტონი, ვენერა, მარსი 🪐",
  "უზომოდ მიყვარხარ 💕💕💕",
  "თქვენ მასწავლეთ რას ნიშნავს სიყვარული <3",
  "ნამეტანი პატივს გცემთ!!!",
  "ჩემი ბედნიერება ბრძანდებით!!!",
  "ყველაზე კარგი გოგო ხართ მთელ მსოფლიოში!!!",
  "დღეს უფრო მიყვარხართ ვიდრე გუშინ, P.S გუშინაც მიყვარდით ",
  "თქვენთან ერთად ძლიერი ვარ 😌",
  "ჩემი ანტიდეპრესანტი ხარ",
  "ვგიჟდები შენ კისკისზე",
  "You have a juicy ass 🤭🤭🤭",
  "ბედნიერი ვარ რომ არსებობს 😘😘",
  "შენი თვალების ციმციმი მიყვარს 🤒🥰😘",
  "თქვენი სიყვარულით, ნამეტან პაატივში ვარ",
  "100 სიცოცხლე რომ მქონდეს ასივეჯერ შენ შეგიყვარებდი 😍"
];


const getBackgroundImage = (day) => {
  switch(day % 5) {
    case 1:
      return fingers;
    case 2:
      return cats;
    case 3:
      return cosmic;
    case 4:
      return hearts;
    case 0:
      return clowns;
    default:
      return fingers;
  }
};

const styles = {
  root: {
    minHeight: '100vh',
    maxHeight: '100vh',
    minWidth: '100vw',
    maxWidth: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    maxWidth: '600px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

  },
  paper: {
    borderRadius: 20,
    padding: '16px',
    elevation: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent white backgrou
  },

  boldText: {
    color: 'white',
    fontWeight: 'bold', // Making the text bold
    letterSpacing: '0.1em', // Adding a little letter spacing for thicker appearance
  },
};

const App = () => {
  const today = new Date();
  const day = today.getDate() % messages.length;

  const backgroundImage = getBackgroundImage(day);
  let message = messages[day];
  console.log(day);
  if (!message) {
    message = "შენი თვალების ციმციმი მიყვარს 🤒🥰😘";
  }

  return (
    <div style={{ ...styles.root, backgroundImage: `url(${backgroundImage})` }}>
        <Paper style={styles.paper}>
          <Typography variant="h6" gutterBottom style={styles.boldText}>
            გამარჯობათ ლიკუნა
          </Typography>
          <Typography variant="h6" gutterBottom style={styles.boldText}>
            მე თქვენი შეყვარებული ვარ, კახა
          </Typography>
          <Typography variant="h6" gutterBottom style={styles.boldText}>
            და თქვენთან მაქვს მესიჯი რომ:
          </Typography>
          <Typography variant="h6" style={styles.boldText}>
            {message}
          </Typography>
        </Paper>
    </div>
  );
}

export default App;
