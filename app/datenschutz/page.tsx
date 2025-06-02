import type { Metadata } from "next"
import { HorizontalDividerLeftAligned } from "@/components/horizontal-divider-left-aligned"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Beste Haarkliniken in Istanbul",
  description: "Alles über den Datenschutz auf beste-haarkliniken.de. Informiere dich über die Verarbeitung deiner Daten, unsere Cookie-Nutzung, Google Analytics und deine Rechte als Nutzer.",
}

export default function DatenschutzPage() {
  // Base URL für Schema.org
  const baseUrl = "https://beste-haarkliniken.de"
  const lastUpdated = "15.05.2025"

  return (
    <>
      {/* Schema.org Auszeichnung */}
      <Script id="schema-datenschutz" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${baseUrl}/datenschutz#webpage`,
          url: `${baseUrl}/datenschutz`,
          name: "Datenschutzerklärung | Beste Haarkliniken in Istanbul",
          description: "Informationen zum Datenschutz und zur Datenverarbeitung auf beste-haarkliniken.de",
          isPartOf: {
            "@id": `${baseUrl}#website`,
          },
          inLanguage: "de-DE",
          mainEntity: {
            "@type": "PrivacyPolicy",
            name: "Datenschutzerklärung von beste-haarkliniken.de",
            dateModified: lastUpdated,
          },
        })}
      </Script>

      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-body text-3xl md:text-4xl mb-8">Datenschutzerklärung</h1>

          <HorizontalDividerLeftAligned />

          <div className="my-12 space-y-8">
            <section>
              <h2 className="font-body text-xl mb-4">Datenschutz auf einen Blick</h2>
              <p className="mb-4 font-mono text-xs">
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
                vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="mb-4 font-mono text-xs">
                Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von
                personenbezogenen Daten auf unserer Website auf. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können.
              </p>
              <p className="font-mono text-xs">Stand: {lastUpdated}</p>
            </section>

            <section>
              <h2 className="font-body text-xl mb-4">Verantwortliche Stelle</h2>
              <p className="mb-2 font-mono text-xs">Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
              <p className="mb-2 font-mono text-xs">Kolja Orzeszko</p>
              <p className="mb-2 font-mono text-xs">Stubenrauchstraße 62</p>
              <p className="mb-2 font-mono text-xs">12161 Berlin</p>
              <p className="mb-2 font-mono text-xs">Deutschland</p>
              <p className="mb-2 font-mono text-xs">E-Mail: kontakt@beste-haarkliniken.de</p>
            </section>

            <section>
              <h2 className="font-body text-xl mb-4">Datenerfassung auf unserer Website</h2>

              <h3 className="font-body text-lg mb-3">Server-Logfiles</h3>
              <p className="mb-4 font-mono text-xs">
                Der Provider unserer Website erhebt und speichert automatisch Informationen in sogenannten
                Server-Logfiles, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="font-mono text-xs">Browsertyp und -version</li>
                <li className="font-mono text-xs">Verwendetes Betriebssystem</li>
                <li className="font-mono text-xs">Referrer URL (die zuvor besuchte Seite)</li>
                <li className="font-mono text-xs">IP-Adresse des zugreifenden Rechners</li>
                <li className="font-mono text-xs">Uhrzeit der Serveranfrage</li>
              </ul>
              <p className="mb-4 font-mono text-xs">
                Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen
                Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns
                konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.
              </p>

              <h3 className="font-body text-lg mb-3">Cookies</h3>
              <p className="mb-4 font-mono text-xs">
                Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät
                gespeichert werden. Ihr Browser greift auf diese Dateien zu. Durch den Einsatz von Cookies erhöht sich
                die Benutzerfreundlichkeit und Sicherheit dieser Website.
              </p>
              <p className="mb-4 font-mono text-xs">
                Wir verwenden zwei Arten von Cookies:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="font-mono text-xs">
                  <strong>Notwendige Cookies:</strong> Diese sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.
                </li>
                <li className="font-mono text-xs">
                  <strong>Analyse-Cookies:</strong> Diese helfen uns, die Nutzung unserer Website zu verstehen und zu verbessern. Sie werden nur mit Ihrer Einwilligung gesetzt.
                </li>
              </ul>
              <p className="mb-4 font-mono text-xs">
                Sie können Ihre Cookie-Einstellungen jederzeit über den Cookie-Banner am unteren Bildschirmrand ändern. 
                Gängige Browser bieten auch die Einstellungsoption, Cookies nicht zuzulassen. Hinweis: Es ist nicht
                gewährleistet, dass Sie auf alle Funktionen dieser Website ohne Einschränkungen zugreifen können, wenn
                Sie entsprechende Einstellungen vornehmen.
              </p>

              <h3 className="font-body text-lg mb-3">Kontaktformular</h3>
              <p className="mb-4 font-mono text-xs">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </section>

            <section>
              <h2 className="font-body text-xl mb-4">Analyse-Tools und Werbung</h2>

              <h3 className="font-body text-lg mb-3">Google Analytics</h3>
              <p className="mb-4 font-mono text-xs">
                Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland
                Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="mb-4 font-mono text-xs">
                Google Analytics verwendet sog. "Cookies". Das sind Textdateien, die auf Ihrem Computer gespeichert
                werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie
                erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von
                Google in den USA übertragen und dort gespeichert.
              </p>
              <p className="mb-4 font-mono text-xs">
                Wir haben die IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von
                Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den
                Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die
                volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.
              </p>
              <p className="mb-4 font-mono text-xs">
                Google Analytics wird nur mit Ihrer Einwilligung aktiviert. Sie können Ihre Einwilligung jederzeit über den
                Cookie-Banner am unteren Bildschirmrand widerrufen. Zusätzlich können Sie die Erfassung der durch den Cookie 
                erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die 
                Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare 
                Browser-Plugin herunterladen und installieren:{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EB5D49] hover:underline"
                >
                  https://tools.google.com/dlpage/gaoptout?hl=de
                </a>
              </p>
              <p className="mb-4 font-mono text-xs">
                Die Nutzung von Google Analytics erfolgt auf Grundlage von Art. 6 Abs. 1 S. 1 lit. a DSGVO. Die Einwilligung 
                ist jederzeit widerrufbar. Die Datenübertragung in die USA wird auf Grundlage der Standardvertragsklauseln 
                der EU-Kommission gestützt. Details finden Sie hier:{" "}
                <a
                  href="https://privacy.google.com/businesses/controllerterms/mccs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EB5D49] hover:underline"
                >
                  https://privacy.google.com/businesses/controllerterms/mccs/
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-body text-xl mb-4">Newsletter</h2>
              <p className="mb-4 font-mono text-xs">
                Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine
                E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der
                angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten
                werden nicht bzw. nur auf freiwilliger Basis erhoben.
              </p>
              <p className="mb-4 font-mono text-xs">
                Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben diese
                nicht an Dritte weiter. Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie
                deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den
                "Austragen"-Link im Newsletter.
              </p>
            </section>

            <section>
              <h2 className="font-body text-xl mb-4">Datensicherheit</h2>
              <p className="mb-4 font-mono text-xs">
                Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in
                Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In
                der Regel handelt es sich dabei um eine 256-Bit Verschlüsselung. Falls Ihr Browser keine 256-Bit
                Verschlüsselung unterstützt, greifen wir stattdessen auf 128-Bit v3 Technologie zurück.
              </p>
              <p className="mb-4 font-mono text-xs">
                Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der
                geschlossenen Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste
                Ihres Browsers.
              </p>
              <p className="mb-4 font-mono text-xs">
                Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre
                Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust,
                Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden
                entsprechend der technologischen Entwicklung fortlaufend verbessert.
              </p>
            </section>

            <section>
              <h2 className="font-body text-xl mb-4">Ihre Rechte als betroffene Person</h2>
              <p className="mb-4 font-mono text-xs">Sie haben das Recht:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li className="font-mono text-xs">
                  gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen;
                </li>
                <li className="font-mono text-xs">
                  gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns
                  gespeicherten personenbezogenen Daten zu verlangen;
                </li>
                <li className="font-mono text-xs">
                  gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;
                </li>
                <li className="font-mono text-xs">
                  gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen;
                </li>
                <li className="font-mono text-xs">
                  gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem
                  strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen
                  anderen Verantwortlichen zu verlangen;
                </li>
                <li className="font-mono text-xs">
                  gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen;
                </li>
                <li className="font-mono text-xs">
                  gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-body text-xl mb-4">Widerspruchsrecht</h2>
              <p className="mb-4 font-mono text-xs">
                Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1
                lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die
                Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer
                besonderen Situation ergeben oder sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall
                haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer besonderen Situation von uns umgesetzt
                wird.
              </p>
              <p className="mb-4 font-mono text-xs">
                Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an:
                kontakt@beste-haarkliniken.de
              </p>
            </section>

            <section>
              <h2 className="font-body text-xl mb-4">Änderung unserer Datenschutzerklärung</h2>
              <p className="mb-4 font-mono text-xs">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
                Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen,
                z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue
                Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="font-body text-xl mb-4">Fragen zum Datenschutz</h2>
              <p className="mb-4 font-mono text-xs">
                Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail an
                kontakt@beste-haarkliniken.de.
              </p>
            </section>
          </div>

          <HorizontalDividerLeftAligned />
        </div>
      </div>
    </>
  )
}
