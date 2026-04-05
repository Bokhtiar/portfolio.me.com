"use client";

import { useForm, ValidationError } from "@formspree/react";

const inputClass =
  "input input-bordered md:w-full bg-primary border rounded border-gray-800 text-secondary";

export function ContactForm() {
  const [state, handleSubmit] = useForm("mlgoopwz");

  if (state.succeeded) {
    return (
      <div className="mx-8 md:mx-32 my-24 flex min-h-[320px] flex-col items-center justify-center text-center">
        <p className="text-xl font-semibold text-white">
          Thanks — your message was sent.
        </p>
        <p className="mt-4 text-secondary">
          I will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-8 md:mx-32 my-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="sr-only">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            className={inputClass}
            placeholder="Enter Your Name"
            autoComplete="name"
          />
          <ValidationError
            field="name"
            errors={state.errors}
            className="mt-1 block text-sm text-red-400"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="sr-only">
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            className={inputClass}
            placeholder="Enter Your Phone"
            autoComplete="tel"
          />
          <ValidationError
            field="phone"
            errors={state.errors}
            className="mt-1 block text-sm text-red-400"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="sr-only">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            className={inputClass}
            placeholder="Enter Your Email"
            autoComplete="email"
          />
          <ValidationError
            field="email"
            errors={state.errors}
            className="mt-1 block text-sm text-red-400"
          />
        </div>
        <div>
          <label htmlFor="contact-subject" className="sr-only">
            Subject
          </label>
          <input
            id="contact-subject"
            type="text"
            name="subject"
            className={inputClass}
            placeholder="Enter Your Subject"
          />
          <ValidationError
            field="subject"
            errors={state.errors}
            className="mt-1 block text-sm text-red-400"
          />
        </div>
      </div>

      <div className="mt-12">
        <label htmlFor="contact-message" className="sr-only">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={8}
          className="bg-primary w-full input-bordered border rounded border-gray-800 text-secondary"
          placeholder="Your message"
        />
        <ValidationError
          field="message"
          errors={state.errors}
          className="mt-1 block text-sm text-red-400"
        />
      </div>

      {state.errors != null && state.errors.getFormErrors().length > 0 && (
        <p className="mt-4 text-center text-sm text-red-400" role="alert">
          Something went wrong. Please try again.
        </p>
      )}

      <div className="mt-8 text-center text-white">
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-secondary rounded-full px-7 py-2 text-sm transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state.submitting ? "Sending…" : "Submit"}
        </button>
      </div>
    </form>
  );
}
