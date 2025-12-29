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

print("Fixing Privacy Policy section keys for back-pack-wander...")

# Updated Privacy Policy content (English) with correct keys for back-pack-wander
privacy_en = {
    "tocTitle": "Table of Contents",
    "sections": {
        "generalStatement": {
            "title": "1. General Information",
            "content": "Backpack Wander GmbH takes the protection of personal data seriously and processes personal data in accordance with applicable data protection laws, including the GDPR."
        },
        "responsibleEntity": {
            "title": "2. Responsible Entity",
            "content": "Backpack Wander GmbH\nKolonnenstrasse 8\n10827, Berlin\nGermany\n\nEmail: info@backpackwander.com"
        },
        "useOfData": {
            "title": "3. Data Processing & Your Rights",
            "content": "This Privacy Policy applies to all services and brands operated by Backpack Wander GmbH, including the Pipeline Quality brand.\n\nLegal Basis for Data Processing (Art. 6 GDPR):\n- Art. 6(1)(b) GDPR - performance of a contract or pre-contractual measures\n- Art. 6(1)(f) GDPR - legitimate interest\n- Art. 6(1)(a) GDPR - consent, where applicable\n\nPersonal data submitted via contact forms or file uploads is processed solely to handle inquiries and project-related communication.\n\nCommunication via WhatsApp is subject to WhatsApp's privacy policy and used exclusively for business purposes.\n\nWe use Google Analytics to analyze website usage. Data processing is based on consent.\n\nData is stored only as long as necessary or required by statutory retention obligations."
        },
        "yourRights": {
            "title": "4. Your Rights",
            "content": "You have the right to access, rectification, erasure, restriction, data portability and objection.\n\nRequests: info@backpackwander.com"
        }
    }
}

# Updated Privacy Policy content (German) with correct keys
privacy_de = {
    "tocTitle": "Inhaltsverzeichnis",
    "sections": {
        "generalStatement": {
            "title": "1. Allgemeine Hinweise",
            "content": "Die Backpack Wander GmbH nimmt den Schutz personenbezogener Daten sehr ernst und verarbeitet diese gemaess DSGVO."
        },
        "responsibleEntity": {
            "title": "2. Verantwortliche Stelle",
            "content": "Backpack Wander GmbH\nKolonnenstrasse 8\n10827, Berlin\nDeutschland\n\nE-Mail: info@backpackwander.de"
        },
        "useOfData": {
            "title": "3. Datenverarbeitung & Ihre Rechte",
            "content": "Diese Datenschutzerklaerung gilt fuer alle Leistungen und Marken der Backpack Wander GmbH, einschliesslich Pipeline Quality.\n\nRechtsgrundlagen (Art. 6 DSGVO):\n- Art. 6 Abs. 1 lit. b DSGVO - Vertragserfuellung\n- Art. 6 Abs. 1 lit. f DSGVO - berechtigtes Interesse\n- Art. 6 Abs. 1 lit. a DSGVO - Einwilligung\n\nUebermittelte Daten werden ausschliesslich zur Bearbeitung von Anfragen und Projekten verarbeitet.\n\nDie Kommunikation ueber WhatsApp erfolgt gemaess der Datenschutzrichtlinie von WhatsApp.\n\nWir nutzen Google Analytics auf Basis einer Einwilligung.\n\nDaten werden nur so lange gespeichert, wie gesetzlich erforderlich."
        },
        "yourRights": {
            "title": "4. Ihre Rechte",
            "content": "Sie haben das Recht auf Auskunft, Berichtigung, Loeschung, Einschraenkung und Widerspruch.\n\nAnfragen: info@backpackwander.de"
        }
    }
}

# Serbian uses English
privacy_sr = privacy_en

def update_translation_file(file_path, privacy):
    """Update a translation file with corrected privacy policy"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        data["privacyPolicy"] = privacy
        
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        return True
    except Exception as e:
        print(f"Error updating {file_path}: {str(e)}")
        return False

# Update English translation
en_file_path = os.path.join(base_path, "en", "translation.json")
if update_translation_file(en_file_path, privacy_en):
    print("Updated English privacy policy")
else:
    print("Failed to update English translation")

# Update German translation
de_file_path = os.path.join(base_path, "de", "translation.json")
if update_translation_file(de_file_path, privacy_de):
    print("Updated German privacy policy")
else:
    print("Failed to update German translation")

# Update Serbian translation
sr_file_path = os.path.join(base_path, "sr", "translation.json")
if update_translation_file(sr_file_path, privacy_sr):
    print("Updated Serbian privacy policy (using English content)")
else:
    print("Failed to update Serbian translation")

print("\nPrivacy Policy keys fixed for back-pack-wander!")
