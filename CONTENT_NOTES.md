# Content and evidence notes

Prepared from the five résumés supplied in this conversation. These notes are for the portfolio owner and are not part of the deployed website.

## Sources

| Topic | Source |
| --- | --- |
| Name, email, education, 2023–2027 degree, 8.33 CGPA | All five résumés |
| Fourth-year status | User's current message |
| HAL internship and Letter of Appreciation | All five résumés |
| DRM: 100+ users, 5 access rules, 6 validation stages, 11 watermark patterns, cryptography | All five résumés |
| PII: NER, regex, heuristics, AWS processing, Azure output, Terraform | All five résumés |
| Churn classification accuracy: 89.02% | Deloitte, GE Aerospace and Jio-bp résumés |
| F.A.S.T founding role, ₹1.5 lakh+ sponsorship, four events, 300+ hackathon participants | Deloitte, GE Aerospace and Jio-bp résumés |
| Skills | Consolidated and curated from the supplied résumés |
| Certifications | Consolidated from the supplied résumés |

The supplied résumés do not state the churn dataset, split strategy, class balance, baseline or evaluation notebook. The site therefore uses “reported classification accuracy” in its visual and adds no invented benchmark or business-impact numbers.

The DRM descriptions count five access rules but enumerate only four examples. The portfolio keeps the count and those four examples without inventing a fifth. Its six numbered stages do not imply undocumented stage names or ordering. Encryption, watermarking and capture-prevention are described as implemented features, with no absolute security guarantee.

The résumé PDFs contain no LinkedIn profile, GitHub profile, repository or certificate-verification URLs. These remain empty in `dist/portfolio.js` and are hidden in the published page.

Several PDFs contain the same Google presentation link. It is not included on the public site because its contents and public accessibility have not been inspected, and its mapping to an appropriate public project artifact is not established. The original supplied PDFs retain it. Add a reviewed public deck URL under the appropriate project when available.

Only the general résumé is included in `dist/assets`. The company-targeted variants are not published. The website itself uses the email as its contact channel and does not print the phone number; the unchanged downloadable résumé contains the contact information from the original.

## Most valuable additions

- Public GitHub repositories with setup instructions and substantive README files.
- A reproducible churn evaluation notebook describing data, split, baseline, precision, recall, F1 and ROC-AUC where appropriate.
- An architecture diagram and synthetic examples for the PII pipeline.
- A publicly shareable appreciation letter or redacted internship evidence.
- Issuer-hosted credential links and public F.A.S.T event evidence.

No metrics beyond the supplied documents were added. No screenshots of internal HAL tools, confidential documents or unsupported claims were created.
