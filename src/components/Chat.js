import React, { useState } from 'react';

// Create a simple React functional component
function Chat() {
    // Sample questions for parents to ask (based on the intents)
    const [sampleQuestions] = useState([
        'Менің баламның оқу үлгерімі қалай?',
        'Бүгінгі үй тапсырмасы қандай?',
        'Мектептегі іс-шаралар қашан өтеді?',
        'Балам мектеп жиналысына қатыса алады ма?',
        'Мектеп формасы қандай болу керек?',
        'Қысқы демалыс қашан басталады?',
        'Мектепте қандай үйірме жұмыстары өтеді?',
        'Мектепке қатысу туралы мәліметті қайдан алуға болады?',
        'Ата-аналар жиналысы қашан болады?',
        'Мектептегі үйірме сабақтардың уақыты қандай?',
        'Балам бүгін мектепке бара алмайды, не істеу керек?',
        'Мектепте жоғалған заттарды қайдан табуға болады?',
        'Балама қалай қолдау көрсетуім керек?',
        'І тоқсан қай кезде аяқталады?',
        'Мектеп әкімшілігі мен сынып жетекшісімен қалай хабарласа аламын?',
        'Cынып туралы ақпарат білгім келеді',
        'ІІІ тоқсан қай кезде аяқталады?'
    ]);

    // Render the page
    return React.createElement(
        'div',
        { 
            style: { 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexDirection: 'column', 
                marginTop: '40px', 
                fontFamily: 'Arial, sans-serif',
                maxWidth: '1200px',
                margin: '0 auto', // Center the entire component
            } 
        },
        React.createElement(
            'h2',
            { style: { color: '#333', marginBottom: '30px', textAlign: 'center' } },
            'Чат-ботқа сұрақтар қоя аласыз'
        ),
        React.createElement(
            'div',
            { 
                style: { 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'flex-start', 
                    width: '100%', // Take up full width for alignment
                    maxWidth: '1000px', // Max width to prevent it from being too wide
                    gap: '20px', // Space between columns
                } 
            },
            React.createElement(
                'div',
                { 
                    style: { 
                        flex: '1', 
                        maxWidth: '400px', 
                        backgroundColor: '#f9f9f9', 
                        borderRadius: '8px', 
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                        padding: '20px' 
                    } 
                },
                React.createElement(
                    'ul',
                    {
                        style: {
                            listStyleType: 'none',
                            padding: 0,
                            margin: 0,
                            textAlign: 'left'
                        }
                    },
                    sampleQuestions.map(function (question, index) {
                        return React.createElement(
                            'li',
                            {
                                key: index,
                                style: {
                                    padding: '10px 15px',
                                    borderBottom: index < sampleQuestions.length - 1 ? '1px solid #ddd' : 'none',
                                    fontSize: '16px',
                                    color: '#555'
                                }
                            },
                            React.createElement('span', { style: { marginRight: '10px', color: '#333', fontWeight: 'bold' } }, `${index + 1}.`),
                            question
                        );
                    })
                )
            ),
            React.createElement(
                'div',
                { style: { flex: '1', maxWidth: '400px' } }, // Set a max width for the iframe container
                React.createElement('iframe', {
                    width: '350',
                    height: '550',
                    allow: 'microphone;',
                    src: 'https://console.dialogflow.com/api-client/demo/embedded/d05cb7ef-8307-4fc7-a3c7-40d9740a5f02',
                    style: { 
                        border: 'none', 
                        borderRadius: '8px', 
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
                    }
                })
            )
        )
    );
}

// Export the component so it can be used in the application
export default Chat;
