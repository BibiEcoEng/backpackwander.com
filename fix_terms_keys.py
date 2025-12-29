# -*- coding: utf-8 -*-
import json
import os
import sys

# Ensure UTF-8 encoding
if sys.version_info[0] >= 3:
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Path to the translation files
base_path = r"d:\00-office\localization\back-pack-wander\src\locales"

print("Fixing Terms & Conditions section keys for back-pack-wander...")

# Updated Terms & Conditions content (English) with correct keys
terms_en = {
    "title": "General Terms and Conditions",
    "tocTitle": "Table of Contents",
    "sections": {
        "generalTerms": {
            "title": "General Terms",
            "content": "These General Terms and Conditions apply to all services and offers of Backpack Wander GmbH.\n\nBackpack Wander GmbH provides, in particular, the following services:\n\n- Coaching for individuals and companies\n- Services in the areas of marketing, digital products, and online offerings\n- QA/QC documentation support and engineering services\n- Project-related remote and on-site support\n- Sale of digital products and merchandise\n\nThe services are provided under various brands of Backpack Wander GmbH, including the Pipeline Quality brand.\n\nThe contractual partner is exclusively Backpack Wander GmbH, unless expressly agreed otherwise."
        },
        "services": {
            "title": "Our Services",
            "content": "Backpack Wander GmbH provides digital business coaching, web design, and digital marketing services.\n\nWe reserve the right to modify or discontinue any service at any time without notice."
        },
        "userObligations": {
            "title": "User Obligations",
            "content": "Users must provide accurate information and use our services in compliance with applicable laws.\n\nYou are responsible for maintaining the confidentiality of your account information."
        },
        "liability": {
            "title": "Limitation of Liability",
            "content": "The liability of Backpack Wander GmbH is limited to intent and gross negligence, to the extent permitted by law.\n\nLiability for indirect damages or lost profits is excluded, to the extent permitted by law.\n\nThe laws of the Federal Republic of Germany apply.\n\nThe place of jurisdiction is - to the extent permitted by law - the company's registered office."
        }
    }
}

# Updated Terms & Conditions content (German) with correct keys
terms_de = {
    "title": "Allgemeine Geschaeftsbedingungen",
    "tocTitle": "Inhaltsverzeichnis",
    "sections": {
        "generalTerms": {
            "title": "Allgemeine Bedingungen",
            "content": "Diese Allgemeinen Geschaeftsbedingungen gelten fuer alle Leistungen und Angebote der Backpack Wander GmbH.\n\nDie Backpack Wander GmbH erbringt insbesondere folgende Leistungen:\n- Coaching fuer Privatpersonen und Unternehmen\n- Dienstleistungen im Bereich Marketing, digitale Produkte und Online-Angebote\n- QA/QC Dokumentationsunterstuetzung und ingenieurtechnische Dienstleistungen\n- Projektbezogene Remote- und Vor-Ort-Unterstuetzung\n- Verkauf digitaler Produkte und Merchandising-Artikel\n\nDie Leistungen werden unter verschiedenen Marken der Backpack Wander GmbH erbracht, einschliesslich der Marke Pipeline Quality.\n\nVertragspartner ist ausschliesslich die Backpack Wander GmbH, sofern nicht ausdruecklich anders vereinbart."
        },
        "services": {
            "title": "Unsere Dienstleistungen",
            "content": "Backpack Wander GmbH bietet digitales Business-Coaching, Webdesign und digitale Marketing-Dienstleistungen an.\n\nWir behalten uns das Recht vor, jede Dienstleistung jederzeit ohne Vorankuendigung zu aendern oder einzustellen."
        },
        "userObligations": {
            "title": "Nutzerpflichten",
            "content": "Nutzer muessen genaue Informationen angeben und unsere Dienste in Uebereinstimmung mit den geltenden Gesetzen nutzen.\n\nSie sind verantwortlich fuer die Wahrung der Vertraulichkeit Ihrer Kontoinformationen."
        },
        "liability": {
            "title": "Haftungsbeschraenkung",
            "content": "Die Haftung der Backpack Wander GmbH ist auf Vorsatz und grobe Fahrlaessigkeit beschraenkt, soweit gesetzlich zulaessig.\n\nEine Haftung fuer mittelbare Schaeden oder entgangenen Gewinn ist ausgeschlossen, sofern gesetzlich zulaessig.\n\nEs gilt das Recht der Bundesrepublik Deutschland.\n\nGerichtsstand ist - soweit gesetzlich zulaessig - der Sitz der Gesellschaft."
        }
    }
}

# Serbian uses English
terms_sr = terms_en

def update_translation_file(file_path, terms):
    """Update a translation file with corrected terms"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        data["termsAndConditions"] = terms
        
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        return True
    except Exception as e:
        print(f"Error updating {file_path}: {str(e)}")
        return False

# Update English translation
en_file_path = os.path.join(base_path, "en", "translation.json")
if update_translation_file(en_file_path, terms_en):
    print("Updated English terms")
else:
    print("Failed to update English translation")

# Update German translation
de_file_path = os.path.join(base_path, "de", "translation.json")
if update_translation_file(de_file_path, terms_de):
    print("Updated German terms")
else:
    print("Failed to update German translation")

# Update Serbian translation
sr_file_path = os.path.join(base_path, "sr", "translation.json")
if update_translation_file(sr_file_path, terms_sr):
    print("Updated Serbian terms (using English content)")
else:
    print("Failed to update Serbian translation")

print("\nTerms & Conditions keys fixed for back-pack-wander!")
