document.addEventListener('DOMContentLoaded', function() {
    // Các biến toàn cục
    let currentLanguage = '';
    let currentLesson = 0;
    let score = 0;
    let questions = [];
    
    // Các phần tử DOM
    const welcomeSection = document.querySelector('.welcome-section');
    const lessonContainer = document.querySelector('.lesson-container');
    const languageSelection = document.querySelector('.language-selection');
    const startLearningBtn = document.getElementById('start-learning');
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const feedbackDiv = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');
    const progressBar = document.getElementById('lesson-progress');
    const languageCards = document.querySelectorAll('.language-card');
    
    // Sự kiện bắt đầu học
    startLearningBtn.addEventListener('click', function() {
        welcomeSection.classList.add('hidden');
        languageSelection.classList.remove('hidden');
    });
    
    // Sự kiện chọn ngôn ngữ
    languageCards.forEach(card => {
        card.addEventListener('click', function() {
            currentLanguage = this.getAttribute('data-lang');
            languageSelection.classList.add('hidden');
            lessonContainer.classList.remove('hidden');
            loadQuestions(currentLanguage);
            startLesson();
        });
    });
    
    // Sự kiện nút tiếp theo
    nextBtn.addEventListener('click', function() {
        this.classList.add('hidden');
        feedbackDiv.classList.add('hidden');
        currentLesson++;
        
        if (currentLesson < questions.length && questions.length > 0) {
            startLesson();
        } else {
            // Đảm bảo không chia cho 0
            const totalQuestions = questions.length > 0 ? questions.length : 1;
            questionContainer.innerHTML = `<h2>Chúc mừng bạn đã hoàn thành bài học!</h2>
                                          <p>Điểm số của bạn: ${score}/${totalQuestions}</p>`;
            optionsContainer.innerHTML = '';
            progressBar.style.width = '100%';
            
            // Hiển thị nút bắt đầu lại
            nextBtn.textContent = 'Học lại';
            nextBtn.classList.remove('hidden');
            nextBtn.addEventListener('click', function() {
                location.reload();
            }, { once: true });
        }
    });
    
    // Tải câu hỏi
    function loadQuestions(language) {
        const questionData = {
            'en': [
                {
                    question: "Dịch 'Xin chào' sang tiếng Anh",
                    options: ["Goodbye", "Hello", "Thank you", "Please"],
                    answer: "Hello"
                },
                {
                    question: "Dịch 'Cảm ơn' sang tiếng Anh",
                    options: ["Hello", "Goodbye", "Thank you", "Sorry"],
                    answer: "Thank you"
                },
                {
                    question: "Dịch 'Tạm biệt' sang tiếng Anh",
                    options: ["Hello", "Goodbye", "Please", "Yes"],
                    answer: "Goodbye"
                },
                {
                    question: "Dịch 'Xin lỗi' sang tiếng Anh",
                    options: ["Thank you", "Please", "Sorry", "Hello"],
                    answer: "Sorry"
                },
                {
                    question: "Dịch 'Vui lòng' sang tiếng Anh",
                    options: ["Please", "Thank you", "Hello", "Goodbye"],
                    answer: "Please"
                },
                {
                    question: "Dịch 'Tôi' sang tiếng Anh",
                    options: ["You", "I", "He", "She"],
                    answer: "I"
                },
                {
                    question: "Dịch 'Bạn' sang tiếng Anh",
                    options: ["I", "You", "We", "They"],
                    answer: "You"
                },
                {
                    question: "Dịch 'Nước' sang tiếng Anh",
                    options: ["Water", "Fire", "Earth", "Air"],
                    answer: "Water"
                },
                {
                    question: "Dịch 'Ăn' sang tiếng Anh",
                    options: ["Drink", "Eat", "Sleep", "Run"],
                    answer: "Eat"
                },
                {
                    question: "Dịch 'Nhà' sang tiếng Anh",
                    options: ["House", "Car", "Tree", "Book"],
                    answer: "House"
                }
            ],
            'fr': [
                {
                    question: "Dịch 'Xin chào' sang tiếng Pháp",
                    options: ["Au revoir", "Bonjour", "Merci", "S'il vous plaît"],
                    answer: "Bonjour"
                },
                {
                    question: "Dịch 'Cảm ơn' sang tiếng Pháp",
                    options: ["Bonjour", "Au revoir", "Merci", "Désolé"],
                    answer: "Merci"
                },
                {
                    question: "Dịch 'Tạm biệt' sang tiếng Pháp",
                    options: ["Bonjour", "Au revoir", "S'il vous plaît", "Oui"],
                    answer: "Au revoir"
                },
                {
                    question: "Dịch 'Xin lỗi' sang tiếng Pháp",
                    options: ["Merci", "S'il vous plaît", "Désolé", "Bonjour"],
                    answer: "Désolé"
                },
                {
                    question: "Dịch 'Vui lòng' sang tiếng Pháp",
                    options: ["S'il vous plaît", "Merci", "Bonjour", "Au revoir"],
                    answer: "S'il vous plaît"
                },
                {
                    question: "Dịch 'Tôi' sang tiếng Pháp",
                    options: ["Vous", "Je", "Il", "Elle"],
                    answer: "Je"
                },
                {
                    question: "Dịch 'Bánh mì' sang tiếng Pháp",
                    options: ["Fromage", "Pain", "Vin", "Beurre"],
                    answer: "Pain"
                },
                {
                    question: "Dịch 'Rượu vang' sang tiếng Pháp",
                    options: ["Biere", "Vin", "Eau", "Jus"],
                    answer: "Vin"
                },
                {
                    question: "Dịch 'Nhà hàng' sang tiếng Pháp",
                    options: ["Restaurant", "Hôtel", "Café", "École"],
                    answer: "Restaurant"
                }
            ],
            'es': [
                {
                    question: "Dịch 'Xin chào' sang tiếng Tây Ban Nha",
                    options: ["Adiós", "Hola", "Gracias", "Por favor"],
                    answer: "Hola"
                },
                {
                    question: "Dịch 'Cảm ơn' sang tiếng Tây Ban Nha",
                    options: ["Hola", "Adiós", "Gracias", "Lo siento"],
                    answer: "Gracias"
                },
                {
                    question: "Dịch 'Tạm biệt' sang tiếng Tây Ban Nha",
                    options: ["Hola", "Adiós", "Por favor", "Sí"],
                    answer: "Adiós"
                },
                {
                    question: "Dịch 'Xin lỗi' sang tiếng Tây Ban Nha",
                    options: ["Gracias", "Por favor", "Lo siento", "Hola"],
                    answer: "Lo siento"
                },
                {
                    question: "Dịch 'Vui lòng' sang tiếng Tây Ban Nha",
                    options: ["Por favor", "Gracias", "Hola", "Adiós"],
                    answer: "Por favor"
                },
                {
                    question: "Dịch 'Tôi' sang tiếng Tây Ban Nha",
                    options: ["Tú", "Yo", "Él", "Ella"],
                    answer: "Yo"
                },
                {
                    question: "Dịch 'Nhà' sang tiếng Tây Ban Nha",
                    options: ["Casa", "Coche", "Árbol", "Libro"],
                    answer: "Casa"
                },
                {
                    question: "Dịch 'Biển' sang tiếng Tây Ban Nha",
                    options: ["Montaña", "Mar", "Río", "Lago"],
                    answer: "Mar"
                },
                {
                    question: "Dịch 'Bia' sang tiếng Tây Ban Nha",
                    options: ["Vino", "Cerveza", "Agua", "Jugo"],
                    answer: "Cerveza"
                }
            ],
            'de': [
                {
                    question: "Dịch 'Xin chào' sang tiếng Đức",
                    options: ["Auf Wiedersehen", "Hallo", "Danke", "Bitte"],
                    answer: "Hallo"
                },
                {
                    question: "Dịch 'Cảm ơn' sang tiếng Đức",
                    options: ["Hallo", "Auf Wiedersehen", "Danke", "Entschuldigung"],
                    answer: "Danke"
                },
                {
                    question: "Dịch 'Tạm biệt' sang tiếng Đức",
                    options: ["Hallo", "Auf Wiedersehen", "Bitte", "Ja"],
                    answer: "Auf Wiedersehen"
                },
                {
                    question: "Dịch 'Xin lỗi' sang tiếng Đức",
                    options: ["Danke", "Bitte", "Entschuldigung", "Hallo"],
                    answer: "Entschuldigung"
                },
                {
                    question: "Dịch 'Vui lòng' sang tiếng Đức",
                    options: ["Bitte", "Danke", "Hallo", "Auf Wiedersehen"],
                    answer: "Bitte"
                },
                {
                    question: "Dịch 'Bia' sang tiếng Đức",
                    options: ["Wein", "Bier", "Wasser", "Saft"],
                    answer: "Bier"
                },
                {
                    question: "Dịch 'Xúc xích' sang tiếng Đức",
                    options: ["Käse", "Wurst", "Brot", "Fleisch"],
                    answer: "Wurst"
                },
                {
                    question: "Dịch 'Xe hơi' sang tiếng Đức",
                    options: ["Auto", "Fahrrad", "Zug", "Flugzeug"],
                    answer: "Auto"
                },
                {
                    question: "Dịch 'Nhà' sang tiếng Đức",
                    options: ["Haus", "Auto", "Baum", "Buch"],
                    answer: "Haus"
                }
            ],
            'zh': [
                {
                    question: "Dịch 'Xin chào' sang tiếng Trung",
                    options: ["再见 (Zàijiàn)", "你好 (Nǐ hǎo)", "谢谢 (Xièxiè)", "请 (Qǐng)"],
                    answer: "你好 (Nǐ hǎo)"
                },
                {
                    question: "Dịch 'Cảm ơn' sang tiếng Trung",
                    options: ["你好 (Nǐ hǎo)", "再见 (Zàijiàn)", "谢谢 (Xièxiè)", "对不起 (Duìbuqǐ)"],
                    answer: "谢谢 (Xièxiè)"
                },
                {
                    question: "Dịch 'Tạm biệt' sang tiếng Trung",
                    options: ["你好 (Nǐ hǎo)", "再见 (Zàijiàn)", "请 (Qǐng)", "是 (Shì)"],
                    answer: "再见 (Zàijiàn)"
                },
                {
                    question: "Dịch 'Xin lỗi' sang tiếng Trung",
                    options: ["谢谢 (Xièxiè)", "请 (Qǐng)", "对不起 (Duìbuqǐ)", "你好 (Nǐ hǎo)"],
                    answer: "对不起 (Duìbuqǐ)"
                },
                {
                    question: "Dịch 'Vui lòng' sang tiếng Trung",
                    options: ["请 (Qǐng)", "谢谢 (Xièxiè)", "你好 (Nǐ hǎo)", "再见 (Zàijiàn)"],
                    answer: "请 (Qǐng)"
                },
                {
                    question: "Dịch 'Tôi' sang tiếng Trung",
                    options: ["你 (Nǐ)", "我 (Wǒ)", "他 (Tā)", "她 (Tā)"],
                    answer: "我 (Wǒ)"
                },
                {
                    question: "Dịch 'Bạn' sang tiếng Trung",
                    options: ["我 (Wǒ)", "你 (Nǐ)", "我们 (Wǒmen)", "他们 (Tāmen)"],
                    answer: "你 (Nǐ)"
                },
                {
                    question: "Dịch 'Nước' sang tiếng Trung",
                    options: ["水 (Shuǐ)", "火 (Huǒ)", "土 (Tǔ)", "空气 (Kōngqì)"],
                    answer: "水 (Shuǐ)"
                },
                {
                    question: "Dịch 'Trà' sang tiếng Trung",
                    options: ["咖啡 (Kāfēi)", "茶 (Chá)", "牛奶 (Niúnǎi)", "果汁 (Guǒzhī)"],
                    answer: "茶 (Chá)"
                },
                {
                    question: "Dịch 'Cơm' sang tiếng Trung",
                    options: ["面 (Miàn)", "饭 (Fàn)", "面包 (Miànbāo)", "饺子 (Jiǎozi)"],
                    answer: "饭 (Fàn)"
                }
            ]
        };
        
        questions = questionData[language] || questionData['en'];
        if (questions.length === 0) {
            questions = [{
                question: "Câu hỏi mặc định",
                options: ["Lựa chọn 1", "Lựa chọn 2"],
                answer: "Lựa chọn 1"
            }];
        }
    }
    
    // Bắt đầu bài học
    function startLesson() {
        const question = questions[currentLesson];
        questionContainer.textContent = question.question;
        
        // Cập nhật thanh tiến trình
        progressBar.style.width = `${(currentLesson / questions.length) * 100}%`;
        
        // Xóa các lựa chọn cũ
        optionsContainer.innerHTML = '';
        
        // Thêm các lựa chọn mới
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            button.addEventListener('click', function() {
                checkAnswer(option, question.answer);
            });
            optionsContainer.appendChild(button);
        });
    }
    
    // Kiểm tra câu trả lời
    function checkAnswer(selectedOption, correctAnswer) {
        // Vô hiệu hóa tất cả các nút lựa chọn
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === correctAnswer) {
                button.style.backgroundColor = '#d4edda';
                button.style.borderColor = '#c3e6cb';
            } else if (button.textContent === selectedOption && selectedOption !== correctAnswer) {
                button.style.backgroundColor = '#f8d7da';
                button.style.borderColor = '#f5c6cb';
            }
        });
        
        // Hiển thị phản hồi
        if (selectedOption === correctAnswer) {
            feedbackDiv.textContent = 'Chính xác!';
            feedbackDiv.className = 'feedback correct';
            score++;
        } else {
            feedbackDiv.textContent = `Sai rồi! Câu trả lời đúng là: ${correctAnswer}`;
            feedbackDiv.className = 'feedback incorrect';
        }
        
        feedbackDiv.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
    }
});