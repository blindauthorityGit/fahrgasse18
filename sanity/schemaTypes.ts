import { defineArrayMember, defineField, defineType } from "sanity";

const story = defineArrayMember({
  name: "story",
  title: "Bild- und Textabschnitt",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Überschrift", type: "string" }),
    defineField({ name: "subheading", title: "Unterzeile", type: "string" }),
    defineField({ name: "body", title: "Text", type: "text", rows: 5 }),
    defineField({
      name: "image",
      title: "Bild",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alternativtext", type: "string" })],
    }),
  ],
});

export const schemaTypes = [
  defineType({
    name: "page",
    title: "Seite",
    type: "document",
    fields: [
      defineField({ name: "title", title: "Seitentitel", type: "string", validation: (rule) => rule.required() }),
      defineField({ name: "slug", title: "URL-Pfad", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
      defineField({
        name: "pageType",
        title: "Seitentyp",
        type: "string",
        options: { list: ["Startseite", "Sortiment", "Über uns", "Kontakt"] },
      }),
      defineField({ name: "heroTitle", title: "Hero-Überschrift", type: "string" }),
      defineField({ name: "heroAccent", title: "Akzentwort im Titel", type: "string" }),
      defineField({ name: "intro", title: "Einleitung", type: "text", rows: 3 }),
      defineField({
        name: "heroImage",
        title: "Hero-Bild",
        type: "image",
        options: { hotspot: true },
        fields: [defineField({ name: "alt", title: "Alternativtext", type: "string" })],
      }),
      defineField({ name: "stories", title: "Inhaltsabschnitte", type: "array", of: [story] }),
    ],
  }),
  defineType({
    name: "siteSettings",
    title: "Seiteneinstellungen",
    type: "document",
    fields: [
      defineField({ name: "title", title: "Name", type: "string", initialValue: "FAHRGASSE 18" }),
      defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
      defineField({ name: "address", title: "Adresse", type: "text", rows: 2 }),
      defineField({ name: "phone", title: "Telefon", type: "string" }),
      defineField({ name: "email", title: "E-Mail", type: "string" }),
      defineField({
        name: "openingHours",
        title: "Öffnungszeiten",
        type: "array",
        of: [defineArrayMember({ type: "object", fields: [
          defineField({ name: "days", title: "Tage", type: "string" }),
          defineField({ name: "hours", title: "Uhrzeit", type: "string" }),
        ] })],
      }),
    ],
  }),
];
