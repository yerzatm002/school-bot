import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper, Link } from '@mui/material';

const ContactSchool = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Simulate form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Хабарлама жіберілді!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Container sx={{ marginTop: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Мектеппен байланысу
      </Typography>
      
      <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
        <Typography variant="body1" sx={{ marginBottom: '20px', fontSize: '16px' }}>
          Құрметті ата-аналар, төмендегі форманы толтырып, мектеп әкімшілігіне хабарлама жіберіңіз. Біз сіздің барлық сұрақтарыңызға жауап беруге тырысамыз.
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Name Field */}
            <TextField
              label="Атыңыз"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            {/* Email Field */}
            <TextField
              label="Электрондық пошта"
              variant="outlined"
              fullWidth
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            {/* Subject Field */}
            <TextField
              label="Тақырыбы"
              variant="outlined"
              fullWidth
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            
            {/* Message Field */}
            <TextField
              label="Хабарламаңыз"
              variant="outlined"
              fullWidth
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              required
            />
            
            {/* Submit Button */}
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Хабарлама жіберу
            </Button>
          </Box>
        </form>
      </Paper>

      {/* Contact Details Section */}
      <Paper elevation={1} sx={{ marginTop: '40px', padding: '20px', backgroundColor: '#f9f9f9' }}>
        <Typography variant="h5" sx={{ marginBottom: '20px', textAlign: 'center' }}>
          Мектептің байланыс ақпараты
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '10px', fontSize: '16px' }}>
          <strong>Мекен-жай:</strong> Қызылорда облысы, Қызылорда қаласы, Ипподром мөлтек ауданы, Есімхан көшесі 19 Б.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '10px', fontSize: '16px' }}>
          <strong>Пошта мекен-жайы:</strong> Қызылорда облысы, Қызылорда қаласы, Ипподром мөлтек ауданы, Есім Хан көшесі, құрылыс 19 Б
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '10px', fontSize: '16px' }}>
          <strong>Электрондық пошта:</strong> <Link href="mailto:278ortamektep@mail.ru">278ortamektep@mail.ru</Link>
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '10px', fontSize: '16px' }}>
          <strong>Ұялы телефон:</strong> +7 (724) 270-1590
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '10px', fontSize: '16px' }}>
          <strong>Facebook:</strong> <Link href="https://www.facebook.com/profile.php?id=100053884188466&mibextid=LQQJ4d" target="_blank">Б.Момынбаев Атындағы Іт-мектеп-лицей</Link>
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '10px', fontSize: '16px' }}>
          <strong>Instagram:</strong> <Link href="https://www.instagram.com/mektep_litseyi_278.bastauysh/" target="_blank">@mektep_litseyi_278.bastauysh</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default ContactSchool;
