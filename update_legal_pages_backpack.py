import json
import os

# Path to the translation files
base_path = r"d:\00-office\localization\back-pack-wander\src\locales"

# Privacy Policy content (English)
privacy_en = {
    "tocTitle": "Table of Contents",
    "sections": {
        "generalInformation": {
            "title": "1. General Information",
            "content": "Backpack Wander GmbH takes the protection of personal data seriously and processes personal data in accordance with applicable data protection laws, including the GDPR."
        },
        "responsibleEntity": {
            "title": "2. Responsible Entity",
            "content": "Backpack Wander GmbH\nKolonnenstrasse 8\n10827, Berlin\nGermany\n\nEmail: info@backpackwander.com"
        },
        "scopeOfApplication": {
            "title": "3. Scope of Application",
            "content": "This Privacy Policy applies to all services and brands operated by Backpack Wander GmbH, including the Pipeline Quality brand."
        },
        "legalBasis": {
            "title": "4. Legal Basis for Data Processing (Art. 6 GDPR)",
            "content": "- Art. 6(1)(b) GDPR – performance of a contract or pre-contractual measures\n- Art. 6(1)(f) GDPR – legitimate interest\n- Art. 6(1)(a) GDPR – consent, where applicable"
        },
        "contactForms": {
            "title": "5. Contact Forms & File Uploads",
            "content": "Personal data submitted via contact forms or file uploads is processed solely to handle inquiries and project-related communication."
        },
        "whatsapp": {
            "title": "6. WhatsApp Communication",
            "content": "Communication via WhatsApp is subject to WhatsApp's privacy policy and used exclusively for business purposes."
        },
        "analytics": {
            "title": "7. Analytics & Tools",
            "content": "We use Google Analytics to analyze website usage. Data processing is based on consent."
        },
        "dataRetention": {
            "title": "8. Data Retention",
            "content": "Data is stored only as long as necessary or required by statutory retention obligations."
        },
        "yourRights": {
            "title": "9. Your Rights",
            "content": "You have the right to access, rectification, erasure, restriction, data portability and objection.\n\nRequests: info@backpackwander.com"
        }
    }
}

# Privacy Policy content (German)
privacy_de = {
    "tocTitle": "Inhaltsverzeichnis",
    "sections": {
        "generalInformation": {
            "title": "1. Allgemeine Hinweise",
            "content": "Die Backpack Wander GmbH nimmt den Schutz personenbezogener Daten sehr ernst und verarbeitet diese gemäß DSGVO."
        },
        "responsibleEntity": {
            "title": "2. Verantwortliche Stelle",
            "content": "Backpack Wander GmbH\nKolonnenstrasse 8\n10827, Berlin\nDeutschland\n\nE-Mail: info@backpackwander.de"
        },
        "scopeOfApplication": {
            "title": "3. Geltungsbereich",
            "content": "Diese Datenschutzerklärung gilt für alle Leistungen und Marken der Backpack Wander GmbH, einschließlich Pipeline Quality."
        },
        "legalBasis": {
            "title": "4. Rechtsgrundlagen (Art. 6 DSGVO)",
            "content": "- Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung\n- Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse\n- Art. 6 Abs. 1 lit. a DSGVO – Einwilligung"
        },
        "contactForms": {
            "title": "5. Kontaktformulare & Datei-Uploads",
            "content": "Übermittelte Daten werden ausschließlich zur Bearbeitung von Anfragen und Projekten verarbeitet."
        },
        "whatsapp": {
            "title": "6. WhatsApp-Kommunikation",
            "content": "Die Kommunikation über WhatsApp erfolgt gemäß der Datenschutzrichtlinie von WhatsApp."
        },
        "analytics": {
            "title": "7. Analyse-Tools",
            "content": "Wir nutzen Google Analytics auf Basis einer Einwilligung."
        },
        "dataRetention": {
            "title": "8. Speicherdauer",
            "content": "Daten werden nur so lange gespeichert, wie gesetzlich erforderlich."
        },
        "yourRights": {
            "title": "9. Ihre Rechte",
            "content": "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Widerspruch.\n\nAnfragen: info@backpackwander.de"
        }
    }
}

# Privacy Policy content (Serbian - using English)
privacy_sr = privacy_en

# Terms & Conditions content (English)
terms_en = {
    "title": "General Terms and Conditions",
    "sections": {
        "intro": {
            "content": "These General Terms and Conditions apply to all services and offers of Backpack Wander GmbH.\n\nBackpack Wander GmbH provides, in particular, the following services:\n\n– Coaching for individuals and companies\n– Services in the areas of marketing, digital products, and online offerings\n– QA/QC documentation support and engineering services\n– Project-related remote and on-site support\n– Sale of digital products and merchandise\n\nThe services are provided under various brands of Backpack Wander GmbH, including the \"Pipeline Quality\" brand.\n\nThe contractual partner is exclusively Backpack Wander GmbH, unless expressly agreed otherwise."
        },
        "liability": {
            "title": "Liability",
            "content": "The liability of Backpack Wander GmbH is limited to intent and gross negligence, to the extent permitted by law.\n\nLiability for indirect damages or lost profits is excluded, to the extent permitted by law."
        },
        "jurisdiction": {
            "title": "Applicable Law & Jurisdiction",
            "content": "The laws of the Federal Republic of Germany apply.\n\nThe place of jurisdiction is – to the extent permitted by law – the company's registered office."
        }
    }
}

# Terms & Conditions content (German)
terms_de = {
    "title": "Allgemeine Geschäftsbedingungen",
    "sections": {
        "intro": {
            "content": "Diese Allgemeinen Geschäftsbedingungen gelten für alle Leistungen und Angebote der Backpack Wander GmbH.\n\nDie Backpack Wander GmbH erbringt insbesondere folgende Leistungen:\n– Coaching für Privatpersonen und Unternehmen\n– Dienstleistungen im Bereich Marketing, digitale Produkte und Online-Angebote\n– QA/QC Dokumentationsunterstützung und ingenieurtechnische Dienstleistungen\n– Projektbezogene Remote- und Vor-Ort-Unterstützung\n– Verkauf digitaler Produkte und Merchandising-Artikel\n\nDie Leistungen werden unter verschiedenen Marken der Backpack Wander GmbH erbracht, einschließlich der Marke „Pipeline Quality".\n\nVertragspartner ist ausschließlich die Backpack Wander GmbH, sofern nicht ausdrücklich anders vereinbart."
        },
        "liability": {
            "title": "Haftung",
            "content": "Die Haftung der Backpack Wander GmbH ist auf Vorsatz und grobe Fahrlässigkeit beschränkt, soweit gesetzlich zulässig.\n\nEine Haftung für mittelbare Schäden oder entgangenen Gewinn ist ausgeschlossen, sofern gesetzlich zulässig."
        },
        "jurisdiction": {
            "title": "Anwendbares Recht & Gerichtsstand",
            "content": "Es gilt das Recht der Bundesrepublik Deutschland.\n\nGerichtsstand ist – soweit gesetzlich zulässig – der Sitz der Gesellschaft."
        }
    }
}

# Terms & Conditions content (Serbian - using English)
terms_sr = terms_en

# Imprint content (English)
imprint_en = {
    "title": "Imprint",
    "sections": {
        "company": {
            "title": "Company Information",
            "content": "Backpack Wander GmbH\nKolonnenstrasse 8\n10827, Berlin\nGermany"
        },
        "director": {
            "title": "Managing Director",
            "content": "Biljana Habel"
        },
        "register": {
            "title": "Commercial Register",
            "content": "Charlottenburg, 14057 Berlin\nHRB 282058 B"
        },
        "vat": {
            "title": "VAT Identification Number",
            "content": "DE451725510"
        },
        "contact": {
            "title": "Email",
            "content": "info@backpackwander.com"
        },
        "brand": {
            "title": "Brand Information",
            "content": "Pipeline Quality is a brand of Backpack Wander GmbH."
        }
    }
}

# Imprint content (German - Impressum)
imprint_de = {
    "title": "Impressum",
    "sections": {
        "intro": {
            "title": "Angaben gemäß § 5 TMG",
            "content": "Backpack Wander GmbH\nKolonnenstrasse 8\n10827, Berlin\nDeutschland"
        },
        "director": {
            "title": "Vertreten durch",
            "content": "Biljana Habel"
        },
        "register": {
            "title": "Registereintrag",
            "content": "Eingetragen im Handelsregister\nRegistergericht:\nCharlottenburg, 14057 Berlin\nHandelsregisternummer:\nHRB 282058 B"
        },
        "vat": {
            "title": "Umsatzsteuer-ID gemäß §27 a Umsatzsteuergesetz",
            "content": "DE451725510"
        },
        "contact": {
            "title": "Kontakt",
            "content": "E-Mail: info@backpackwander.de"
        },
        "brand": {
            "title": "Markeninformation",
            "content": "Pipeline Quality ist eine Marke der Backpack Wander GmbH."
        }
    }
}

# Imprint content (Serbian - using English)
imprint_sr = imprint_en

# Add page titles and hero subtitles
page_titles_en = {
    "privacyPolicyTitle": "Privacy Policy",
    "privacyPolicyHeroSubtitle": "Your trust and data security are paramount to us.",
    "privacyPolicyCtaTitle": "Have Questions About Your Data?",
    "privacyPolicyCtaText": "We're here to help. Contact us for any inquiries regarding your personal data and our privacy practices.",
    "privacyPolicyCtaButton": "Contact Support",
    "termsTitle": "Terms and Conditions",
    "termsHeroSubtitle": "Please read our terms and conditions carefully.",
    "termsCtaTitle": "Questions About Our Terms?",
    "termsCtaText": "Contact us if you have any questions about our terms and conditions.",
    "termsCtaButton": "Contact Support",
    "imprintTitle": "Imprint",
    "imprintHeroSubtitle": "Legal information about Backpack Wander GmbH.",
    "imprintCtaTitle": "Need More Information?",
    "imprintCtaText": "Contact us for any questions about our company information.",
    "imprintCtaButton": "Contact Us",
    "footer.termsAndConditions": "Terms & Conditions",
    "footer.imprint": "Imprint"
}

page_titles_de = {
    "privacyPolicyTitle": "Datenschutzerklärung",
    "privacyPolicyHeroSubtitle": "Ihr Vertrauen und Ihre Datensicherheit sind uns wichtig.",
    "privacyPolicyCtaTitle": "Fragen zu Ihren Daten?",
    "privacyPolicyCtaText": "Wir helfen Ihnen gerne. Kontaktieren Sie uns bei Fragen zu Ihren persönlichen Daten und unseren Datenschutzpraktiken.",
    "privacyPolicyCtaButton": "Support kontaktieren",
    "termsTitle": "Allgemeine Geschäftsbedingungen",
    "termsHeroSubtitle": "Bitte lesen Sie unsere Geschäftsbedingungen sorgfältig durch.",
    "termsCtaTitle": "Fragen zu unseren Bedingungen?",
    "termsCtaText": "Kontaktieren Sie uns bei Fragen zu unseren Geschäftsbedingungen.",
    "termsCtaButton": "Support kontaktieren",
    "imprintTitle": "Impressum",
    "imprintHeroSubtitle": "Rechtliche Informationen über Backpack Wander GmbH.",
    "imprintCtaTitle": "Weitere Informationen benötigt?",
    "imprintCtaText": "Kontaktieren Sie uns bei Fragen zu unseren Unternehmensinformationen.",
    "imprintCtaButton": "Kontakt",
    "footer.termsAndConditions": "AGB",
    "footer.imprint": "Impressum"
}

page_titles_sr = page_titles_en  # Using English for Serbian

def update_translation_file(file_path, privacy, terms, imprint, page_titles):
    """Update a translation file with new content"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        data["privacyPolicy"] = privacy
        data["termsAndConditions"] = terms
        data["imprint"] = imprint
        data.update(page_titles)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        return True
    except Exception as e:
        print(f"Error updating {file_path}: {str(e)}")
        return False

# Update English translation
en_file_path = os.path.join(base_path, "en", "translation.json")
if update_translation_file(en_file_path, privacy_en, terms_en, imprint_en, page_titles_en):
    print("✓ Updated English privacy, terms & imprint")
else:
    print("✗ Failed to update English translation")

# Update German translation
de_file_path = os.path.join(base_path, "de", "translation.json")
if update_translation_file(de_file_path, privacy_de, terms_de, imprint_de, page_titles_de):
    print("✓ Updated German privacy, terms & imprint")
else:
    print("✗ Failed to update German translation")

# Update Serbian translation
sr_file_path = os.path.join(base_path, "sr", "translation.json")
if update_translation_file(sr_file_path, privacy_sr, terms_sr, imprint_sr, page_titles_sr):
    print("✓ Updated Serbian privacy, terms & imprint (using English content)")
else:
    print("✗ Failed to update Serbian translation")

print("\nAll translations updated successfully for back-pack-wander!")
