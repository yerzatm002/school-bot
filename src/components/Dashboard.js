import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const Dashboard = () => {
  return (
    <Container sx={{ marginTop: '30px' }}>
      {/* Welcome heading */}
      <Typography variant="h4" sx={{ marginBottom: '30px', textAlign: 'center' }}>
        Құрметті ата-аналар, платформаға қош келдіңіздер!
      </Typography>
      
      {/* Welcome Image */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/chemistry-bcf93.appspot.com/o/welcome.jpg?alt=media&token=75a4735a-f9d3-4061-b218-0fbde49d97bd" 
          alt="Welcome" 
          style={{ width: '80%', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} 
        />
      </Box>

      {/* Welcome message */}
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', backgroundColor: '#f5f5f5' }}>
        <Typography variant="body1" sx={{ fontSize: '18px' }}>
          Құрметті ата-аналар, біздің мектептің ақпараттық платформасына қош келдіңіздер! Бұл платформа сіздің балаңыздың оқу барысы, сабақтар, мектеп жаңалықтары және басқа да маңызды ақпараттармен танысуға көмектеседі. Мұнда сіз балаңыздың үлгерімі туралы мәліметтерді көріп, мұғалімдермен байланыса аласыз.
        </Typography>
      </Paper>

      {/* Chatbot and School Administrator Information */}
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', backgroundColor: '#f5f5f5' }}>
        <Typography variant="body1" sx={{ fontSize: '18px' }}>
          Бұл платформада сіз жасанды интеллект негізіндегі чат-ботпен сөйлесе аласыз және мектеп әкімшілігімен байланысу мүмкіндігіне ие боласыз. Чат-бот сіздің сұрақтарыңызға жауап беріп, оқу үдерісіне қатысты ақпараттармен бөліседі.
        </Typography>
      </Paper>

      {/* Educational Images Section */}
      <Typography variant="h5" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Білім беру суреттері
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/chemistry-bcf93.appspot.com/o/class1.jpg?alt=media&token=6968b625-741f-49f8-aef2-341b8e14196a" 
          alt="Educational Image 1" 
          style={{ width: '30%', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} 
        />
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/chemistry-bcf93.appspot.com/o/class2.jpg?alt=media&token=281e6af6-8970-44a1-bf5b-13727a09aee4" 
          alt="Educational Image 2" 
          style={{ width: '30%', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} 
        />
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/chemistry-bcf93.appspot.com/o/class3.jpg?alt=media&token=1431138b-e235-4276-85c7-ea630d3edc38" 
          alt="Educational Image 3" 
          style={{ width: '30%', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} 
        />
      </Box>

      {/* School News Section */}
      <Typography variant="h5" sx={{ marginTop: '40px', marginBottom: '20px', textAlign: 'center' }}>
        Мектеп жаңалықтары
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>        
        {/* News Item 3 */}
        <Paper elevation={3} sx={{ display: 'flex', padding: '20px', gap: '20px', alignItems: 'center' }}>
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/chemistry-bcf93.appspot.com/o/library.jpg?alt=media&token=083f7b5a-4a3c-47c5-a94c-f831eb3c0184" 
            alt="School News 3" 
            style={{ width: '250px', height: '150px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} 
          />
          <Typography variant="body1">
          Биыл жаңа оқу жылында мектебіміздің кітапханасы толықтай жаңартылып, оқушыларға кеңейтілген әдебиет қоры ұсынылды. Сонымен қатар, кітаптарды сыртқа тіркеусіз алып шығуға жол бермеу мақсатында "Антикраж" ұрлыққа қарсы радиожиілік жүйесі орнатылды.
          </Typography>
        </Paper>
      </Box>


      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>        
        {/* News Item 3 */}
        <Paper elevation={3} sx={{ display: 'flex', padding: '20px', gap: '20px', alignItems: 'center' }}>
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/chemistry-bcf93.appspot.com/o/news2.jpg?alt=media&token=087ecbdc-9d90-4e8b-8ef0-e75d3bd5145e" 
            alt="School News 3" 
            style={{ width: '250px', height: '150px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} 
          />
          <Typography variant="body1">
          Биылғы жылы мектебімізге жаңадан роботтар келді. Бұл оқиға оқушылапға робот әлемімен танысуға мүмкіндіктер береді.
          </Typography>
        </Paper>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>        
        {/* News Item 3 */}
        <Paper elevation={3} sx={{ display: 'flex', padding: '20px', gap: '20px', alignItems: 'center' }}>
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/chemistry-bcf93.appspot.com/o/news3.jpg?alt=media&token=33ad0c23-f7e1-4173-b307-ae9b5dc68770" 
            alt="School News 3" 
            style={{ width: '250px', height: '150px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} 
          />
          <Typography variant="body1">
          «Зерде» зерттеу жобалары мен шығармашылық жұмыстары конкурсының РЕСПУБЛИКАЛЫҚ КЕЗЕҢІНДЕ «Информатика,робототехника, STEM инженерия» секциясы бойынша шәкіртіміз 7-сынып оқушысы Ибрайм Ералы, жетекшісі Айменова Венера жүлделі 1️⃣орынды иеленіп,АБЫРОЙЫМЫЗДЫ АСҚАҚТАТТЫ,МЕКТЕП МЕРЕЙІН БҮКІЛ РЕСПУБЛИКАҒА ПАШ ЕТТІ.          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;
