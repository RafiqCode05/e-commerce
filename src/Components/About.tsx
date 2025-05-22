

const About = () => {
  return (
    <div className="about-container">
      <h1>
        Haqqımızda
      </h1>
      <p className="about-desc">
        Biz müasir və sərfəli e-ticarət platformasıyıq. Məqsədimiz sizə ən yaxşı məhsulları ən münasib qiymətlərlə təqdim etməkdir.
      </p>

      <section className="about-features">
        <div>
          <h3>
            ✔️ Sürətli çatdırılma
          </h3>
          <p>
            Bütün sifarişləriniz 24 saat ərzində qapınıza çatdırılır
          </p>
        </div>
        <div>
          <h3>
            ✔️ 100% orijinal məhsullar
          </h3>
          <p>
            Yalnız rəsmi və keyfiyyətli məhsullar təqdim edirik.
          </p>
        </div>
        <div>
          <h3>
            ✔️ 7/24 dəstək
          </h3>
          <p>
            İstənilən vaxt suallarınızı cavablandırmağa hazırıq
          </p>
        </div>
      </section>
      <section className="about-team">
        <h2>
          Komandamız
        </h2>
        <div className="team-list">
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
            <span>
              Elvin Əliyev
            </span>
            <p>
              CEO & Founder
            </p>
          </div>

          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
            <span>
              Aysel Məmmədova
            </span>
            <p>
              Müştəri Xidmətləri
            </p>
          </div>
        </div>
      </section>
      <section className="about-faq">
        <h2>
          Tez-tez verilən suallar
        </h2>
        <div className="faq-list">
          <div className="faq-item">
            <strong>Çatdırılma neçə günə olur?</strong>
            <p>Çatdırılma Bakı daxilində 24 saat, bölgələrə isə 2-3 iş günü ərzində həyata keçirilir.</p>
          </div>
          <div className="faq-item">
            <strong>Məhsulu geri qaytara bilərəm?</strong>
            <p>Bəli, məhsulu 14 gün ərzində geri qaytara bilərsiniz.</p>
          </div>
        </div>
      </section>
      <section className="about-contact">
        <h2>
          Əlaqə
        </h2>
        <p>
          Email: info@demo.az
        </p>
        <p>
          Telefon: +994 77 549 46 06
        </p>
        <p>
          Ünvan: Bakı şəhəri, Nərimanov r., Əhməd Rəcəbli 12
        </p>

      </section>

    </div>

  )
}

export default About