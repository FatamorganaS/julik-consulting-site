'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';
import { Textarea } from '@/components/ui/textarea';

const sessions = [
  'QA Career Session — 60 min · €69',
  'QA Mock Interview — 60 min · €89',
  'Pair Testing Session — 60 min · €89',
  'IT English Session — 50 min · €49',
  'English Walk & Talk — 60 min · €55',
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
          <Label htmlFor="name">Name *</Label>
          <Input id="name" name="name" autoComplete="name" required />
        </div>

        <div className="field">
          <Label htmlFor="email">Email *</Label>
          <Input
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
          <Label htmlFor="service">Session *</Label>
          <NativeSelect id="service" name="service" required>
            {sessions.map((session) => (
              <NativeSelectOption key={session} value={session}>
                {session}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </div>

        <div className="field">
          <Label htmlFor="language">Preferred language *</Label>
          <NativeSelect id="language" name="language" required>
            <NativeSelectOption value="English">English</NativeSelectOption>
            <NativeSelectOption value="Ukrainian">Ukrainian</NativeSelectOption>
          </NativeSelect>
        </div>
      </div>

      <div className="field">
        <Label htmlFor="context">What would you like help with? *</Label>
        <p className="field-help" id="context-help">
          Describe your current situation, what is worrying you and what you
          would like to achieve during the session.
        </p>
        <Textarea
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
        <Label htmlFor="link">Relevant link</Label>
        <p className="field-help" id="link-help">
          CV, LinkedIn, portfolio, job description or project URL. Please do not
          share passwords or sensitive information.
        </p>
        <Input
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
        <Button type="submit" className="submit-button">
          Continue to booking <span aria-hidden="true">→</span>
        </Button>
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
