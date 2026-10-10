"use client";

import { useId, useState } from "react";
import { site } from "@/lib/site";
import { PanelHeader } from "./SectionHeader";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  autoComplete?: string;
  required?: boolean;
  wide?: boolean;
};

const fields: Field[] = [
  { name: "name", label: "Name", autoComplete: "name", required: true },
  { name: "company", label: "Company", autoComplete: "organization", required: true },
  { name: "role", label: "Role", autoComplete: "organization-title", required: true },
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { name: "erp", label: "ERP you use" },
  { name: "hardest", label: "What’s hardest to find today?", type: "textarea", wide: true },
];

type Errors = Partial<Record<string, string>>;
type Status = "idle" | "submitting" | "sent" | "mailto" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  for (const f of fields) {
    const value = String(data.get(f.name) ?? "").trim();
    if (f.required && !value) errors[f.name] = `${f.label} is required.`;
    else if (f.type === "email" && value && !EMAIL_RE.test(value))
      errors[f.name] = "Enter a valid email address.";
  }
  return errors;
}

function toMailto(data: FormData): string {
  const lines = fields.map((f) => `${f.label}: ${String(data.get(f.name) ?? "").trim() || "—"}`);
  const subject = `Discovery visit request — ${String(data.get("company") ?? "").trim()}`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    lines.join("\n"),
  )}`;
}

const inputBase =
  "mt-1.5 block w-full rounded-none border bg-input-bg px-3 py-2.5 text-sm text-text placeholder:text-muted focus:border-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent";

export default function ContactForm() {
  const uid = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real people never fill this in
    if (String(data.get("_gotcha") ?? "")) return;

    const found = validate(data);
    setErrors(found);
    const first = fields.find((f) => found[f.name]);
    if (first) {
      form.querySelector<HTMLElement>(`[name="${first.name}"]`)?.focus();
      return;
    }

    if (!site.formEndpoint) {
      window.location.href = toMailto(data);
      setStatus("mailto");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="self-start border border-border bg-panel">
        <PanelHeader
          left="Request — discovery visit"
          right={
            <span className="flex items-center gap-2 text-ok">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-ok" />
              Received
            </span>
          }
        />
        <p className="px-5 py-8 text-xl font-medium">
          Thanks — we’ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      aria-label="Request a discovery visit"
      className="relative self-start border border-border bg-panel"
    >
      <PanelHeader
        left="Request — discovery visit"
        right={<span id={`${uid}-note`}>* required</span>}
      />
      <div className="grid gap-4 p-5 sm:grid-cols-2">
        {fields.map((f) => {
          const id = `${uid}-${f.name}`;
          const err = errors[f.name];
          const props = {
            id,
            name: f.name,
            autoComplete: f.autoComplete,
            required: f.required,
            "aria-invalid": err ? true : undefined,
            "aria-describedby": err ? `${id}-error` : undefined,
            className: `${inputBase} ${err ? "border-alert" : "border-border"}`,
          };
          return (
            <div key={f.name} className={f.wide ? "sm:col-span-2" : undefined}>
              <label
                htmlFor={id}
                className="font-mono text-[10.5px] tracking-[0.1em] text-muted uppercase"
              >
                {f.label}
                {f.required && <span aria-hidden="true"> *</span>}
              </label>
              {f.type === "textarea" ? (
                <textarea {...props} rows={3} className={`${props.className} resize-y`} />
              ) : (
                <input {...props} type={f.type ?? "text"} />
              )}
              {err && (
                <p id={`${id}-error`} className="mt-1.5 text-sm text-alert-ink">
                  {err}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Spam honeypot, hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Leave this empty
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div aria-live="polite" className="px-5 text-sm text-muted empty:hidden">
        {status === "mailto" && (
          <p className="pb-4">
            Your email app should open with these details. If it didn’t, write to{" "}
            <a href={`mailto:${site.email}`} className="text-text underline underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        )}
        {status === "error" && (
          <p className="pb-4 text-alert-ink">
            Something went wrong sending the form. Email{" "}
            <a href={`mailto:${site.email}`} className="underline underline-offset-4">
              {site.email}
            </a>{" "}
            instead.
          </p>
        )}
      </div>

      <div className="flex flex-col-reverse gap-4 border-t border-border px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] text-muted">Reply within one business day.</p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-[2px] bg-accent px-5 py-3 text-[15px] font-medium text-on-accent transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "submitting" ? "Sending…" : "Request a discovery visit"}
        </button>
      </div>
    </form>
  );
}
