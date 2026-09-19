'use client';

import { FormEvent, useState } from 'react';

const sessions = [
  'QA Clarity Session — 60 min · €49',
  'QA Mock Interview — 60 min · €59',
  'Pair Testing Session — 60 min · €69',
  'IT English Session — 50 min · €39',
  'English Walk & Talk — 60 min · €45',
  'Free discovery call — 15 min',
];

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const subject = `Session request: ${data.get('service')}`;
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Session: ${data.get('service')}`,
      `Preferred language: ${data.get('language')}`,
      '',
      'What I would like help with:',
      String(data.get('context')),
      '',
      `Relevant link: ${data.get('link') || 'Not provided'}`,
    ].join('\n');

    setSubmitted(true);
    window.location.href = `mailto:dyakova.yulya@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name *</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>

        <div className="field">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="service">Session *</label>
          <select id="service" name="service" required>
            {sessions.map((session) => (
              <option key={session} value={session}>
                {session}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="language">Preferred language *</label>
          <select id="language" name="language" required>
            <option value="English">English</option>
            <option value="Ukrainian">Ukrainian</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="context">What would you like help with? *</label>
        <p className="field-help" id="context-help">
          Describe your current situation, what is worrying you and what you
          would like to achieve during the session.
        </p>
        <textarea
          id="context"
          name="context"
          minLength={50}
          rows={7}
          aria-describedby="context-help"
          placeholder="For example: I have been learning manual QA for six months, but I don’t know whether I’m ready to apply for jobs…"
          required
        />
      </div>

      <div className="field">
        <label htmlFor="link">Relevant link</label>
        <p className="field-help" id="link-help">
          LinkedIn, portfolio, job description or project URL. Please do not
          share passwords or sensitive information.
        </p>
        <input
          id="link"
          name="link"
          type="url"
          inputMode="url"
          aria-describedby="link-help"
          placeholder="https://"
        />
      </div>

      <label className="consent-row">
        <input type="checkbox" required />
        <span>
          I agree that my details may be used to arrange this session. *
        </span>
      </label>

      <div className="form-submit">
        <button type="submit" className="submit-button">
          Continue to booking <span aria-hidden="true">→</span>
        </button>
        <p>
          Your answers are required before a time can be confirmed. Calendar
          selection will be connected to this step.
        </p>
      </div>

      {submitted ? (
        <p className="form-status" role="status">
          Your email app has opened with your answers. Send the message to
          request the session.
        </p>
      ) : null}
    </form>
  );
}
