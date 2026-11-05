import React from 'react';
import './App.css';

function App() {
  const resumeData = {
    name: "Аэлита Аскарбекова",
    title: "Начинающий IT-специалист | Студентка направления Software Technologies",
    contacts: {
      location: "Бишкек, Кыргызстан",
      phone: "0556 705 079",
      email: "askarbekovaaelita8@gmail.com",
      telegram: "@askarbekovaaelita",
      birthDate: "19.02.2008 г.",
      age: "18 лет",
      github: "https://github.com/askarbekovaaelita8-svg"
    },
    goal: "Получить начальную позицию в IT, где смогу применять полученные знания, развивать технические навыки и приобретать практический опыт.",
    education: [
      {
        degree: "Software Technologies (Программные технологии)",
        school: "Кыргызско-Германский институт прикладной информатики (KGIPI), Бишкек, Кыргызстан",
        period: "2-й курс"
      }
    ],
    skills: [
      { category: "Программирование", detail: "Основы Java и Python" },
      { category: "Базы данных", detail: "SQL, PostgreSQL, основы проектирования баз данных" },
      { category: "Веб-разработка", detail: "HTML, CSS, JavaScript" },
      { category: "Инструменты", detail: "Git, IDE" },
      { category: "Компьютерные сети", detail: "Основы сетевых технологий, Cisco, лабораторные работы в GNS3" },
      { category: "Проектирование", detail: "UML, описание требований к программному обеспечению" },
      { category: "Офисные программы", detail: "Microsoft Word, Excel — базовый уровень" }
    ],
    projects: [
      {
        role: "Автоматизация обновления карточек товаров",
        detail: "Учебный проект по автоматизации обработки карточек товаров на маркетплейсе Wildberries.",
        technologies: "Java, Spring Boot, PostgreSQL, Selenium"
      },
      {
        role: "Практические работы по компьютерным сетям",
        detail: "Выполнение лабораторных работ по настройке сетевого оборудования и изучению сетевых протоколов."
      }
    ],
    languages: [
      "Кыргызский — родной",
      "Русский — свободное владение",
      "Английский — Intermediate",
      "Немецкий — начальный уровень"
    ],
    qualities: "Ответственность, внимательность к деталям, готовность учиться и развивать технические навыки."
  };

  return (
    <div className="container">
      <div className="card">
        <header className="profile-header">
          <img
            src="https://github.com/askarbekovaaelita8-svg.png"
            alt={resumeData.name}
            className="avatar"
          />
          <div className="profile-details">
            <h1>{resumeData.name}</h1>
            <span className="subtitle">{resumeData.title}</span>
            <div className="contacts-grid">
              <div>📍 {resumeData.contacts.location}</div>
              <div>📞 Телефон: {resumeData.contacts.phone}</div>
              <div>
                ✉️ Email:{" "}
                <a href={`mailto:${resumeData.contacts.email}`}>{resumeData.contacts.email}</a>
              </div>
              <div>
                Telegram:{" "}
                <a href={`https://t.me/${resumeData.contacts.telegram.slice(1)}`} target="_blank" rel="noreferrer">
                  {resumeData.contacts.telegram}
                </a>
              </div>
              <div>🎂 {resumeData.contacts.birthDate}</div>
              <div>👤 {resumeData.contacts.age}</div>
              <div>
                🔗{" "}
                <a href={resumeData.contacts.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="section">
          <h2 className="section-title">Цель</h2>
          <p className="about-text">{resumeData.goal}</p>
        </section>

        <section className="section">
          <h2 className="section-title">Образование</h2>
          {resumeData.education.map((item, index) => (
            <div key={index} className="education-item">
              <div className="item-header">
                <span className="item-role">{item.degree}</span>
                <span className="item-date">{item.period}</span>
              </div>
              <div className="item-place">{item.school}</div>
            </div>
          ))}
        </section>

        <section className="section">
          <h2 className="section-title">Технические навыки</h2>
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="skill-category">
              <span className="category-title">{skill.category}</span>
              <p className="item-desc">{skill.detail}</p>
            </div>
          ))}
        </section>

        <section className="section">
          <h2 className="section-title">Учебные проекты</h2>
          {resumeData.projects.map((project, index) => (
            <div key={index} className="experience-item">
              <div className="item-role">{project.role}</div>
              <p className="item-desc">{project.detail}</p>
              {project.technologies && (
                <p className="item-desc"><strong>Используемые технологии:</strong> {project.technologies}</p>
              )}
            </div>
          ))}
        </section>

        <section className="section">
          <h2 className="section-title">Языки</h2>
          <div className="badges">
            {resumeData.languages.map((language, index) => (
              <span key={index} className="badge">{language}</span>
            ))}
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Личные качества</h2>
          <p className="about-text">{resumeData.qualities}</p>
        </section>
      </div>
    </div>
  );
}

export default App;