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
          src="https://daryo.uz/cache/2020/03/maktab-Qozog%E2%80%98iston-2000x1316.jpg" 
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
          src="https://sun9-65.userapi.com/impg/HxkyM7WvoUQnEe_Wu0yV7rZk_shlbfJTVmFINg/Q5f17oO-DR0.jpg?size=700x466&quality=96&sign=462083ce3b62a4773b040b12088f234d&c_uniq_tag=YrMYWWUJJvZF6o5G8SEOkTJEBLAKPbJYfDEdaGyZ8sg&type=album" 
          alt="Educational Image 1" 
          style={{ width: '30%', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} 
        />
        <img 
          src="https://vecher.kz/uploads/images/2022/08/image_750x_6309fbcea157b.jpg" 
          alt="Educational Image 2" 
          style={{ width: '30%', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} 
        />
        <img 
          src="https://repost.uz/storage/uploads/1-1640501946-kamila-post-material.jpeg" 
          alt="Educational Image 3" 
          style={{ width: '30%', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} 
        />
      </Box>

      {/* School News Section */}
      <Typography variant="h5" sx={{ marginTop: '40px', marginBottom: '20px', textAlign: 'center' }}>
        Мектеп жаңалықтары
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* News Item 1 */}
        <Paper elevation={3} sx={{ display: 'flex', padding: '20px', gap: '20px', alignItems: 'center' }}>
          <img 
            src="https://sh-gustomojskaya-r38.gosweb.gosuslugi.ru/netcat_files/58/653/1673088514_pro_dachnikov_com_p_sportivnii_zal_v_shkole_foto_37.jpg" 
            alt="School News 1" 
            style={{ width: '150px', height: '150px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} 
          />
          <Typography variant="body1">
            Мектебімізде жаңа спорт залдың ашылуы болды. Бұл оқиға оқушыларға дене шынықтырумен айналысуға қосымша мүмкіндіктер береді.
          </Typography>
        </Paper>
        
        {/* News Item 2 */}
        <Paper elevation={3} sx={{ display: 'flex', padding: '20px', gap: '20px', alignItems: 'center' }}>
          <img 
            src="https://dknews.kz/storage/news/2022-03/q9jnVpZHfcZJz55VtBq2tV52lqA9GYFRA0x9QezF.jpg" 
            alt="School News 2" 
            style={{ width: '150px', height: '150px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} 
          />
          <Typography variant="body1">
            Мектеп оқушылары арасында химия пәнінен олимпиада ұйымдастырылды. Оқушылар жоғары нәтижелер көрсетіп, жүлделі орындар иеленді.
          </Typography>
        </Paper>
        
        {/* News Item 3 */}
        <Paper elevation={3} sx={{ display: 'flex', padding: '20px', gap: '20px', alignItems: 'center' }}>
          <img 
            src="https://shkola40staryjoskol-r31.gosweb.gosuslugi.ru/netcat_files/multifile/182/1259/Foto2.jpg" 
            alt="School News 3" 
            style={{ width: '150px', height: '150px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} 
          />
          <Typography variant="body1">
            Жаңа оқу жылында мектеп кітапханасы толықтай жаңартылып, оқушыларға кеңейтілген әдебиет қоры ұсынылды.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;
