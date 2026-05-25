import { TourGuide } from "@nickmanning214/tour-guide";
import "@nickmanning214/tour-guide/style.css";
import { pipe } from "effect";
import { useRef, useState } from "react";
import "./styles.css";

const prayerRows = [
  ["fajr", "Fajr:", "6:00 AM"],
  ["dhuhr", "Dhuhr:", "12:30 PM"],
  ["asr", "Asr:", "3:30 PM"],
  ["maghrib", "Maghrib:", "5:37 PM"],
  ["isha", "Isha:", "8:00 PM"],
  ["jumuah", "Jumuah:", "1:20 PM"],
];

export default () =>
  pipe(
    {
      controlsRef: useRef<HTMLDivElement | null>(null),
      packageRef: useRef<HTMLElement | null>(null),
      sourceRef: useRef<HTMLElement | null>(null),
      tableRef: useRef<HTMLElement | null>(null),
    },
    ({ controlsRef, packageRef, sourceRef, tableRef }) =>
      pipe(
        useState(["fajr", "dhuhr", "asr", "maghrib", "isha", "jumuah"]),
        ([visibleRows, setVisibleRows]) => (
          <main>
            <TourGuide
              startButtonLabel="Tour"
              steps={[
                {
                  title: "React Prayer Times Package",
                  body: "This demo is only for the reusable package repo. It does not switch to the CRA apps or the SSR scaffold.",
                },
                {
                  title: "Package role",
                  body: "The old repo exported a PrayerTimes component. It was the library surface the other apps could consume.",
                  targetLabel: "Package role",
                  targetRef: packageRef,
                },
                {
                  title: "Prop controls",
                  body: "Each toggle stands in for one optional prop. The original component rendered a row only when that prop existed.",
                  targetLabel: "Prop controls",
                  targetRef: controlsRef,
                },
                {
                  title: "Rendered table",
                  body: "This table is the whole package behavior: labels and values, with no app-level scheduling logic.",
                  targetLabel: "Rendered table",
                  targetRef: tableRef,
                },
                {
                  title: "Source shape",
                  body: "The old source was a small React component with PropTypes for fajr, dhuhr, asr, maghrib, isha, and jumuah.",
                  targetLabel: "Source shape",
                  targetRef: sourceRef,
                },
                {
                  title: "Tour complete",
                  body: "That’s the end of the tour. You now have the context you need to explore the repo.",
                },
              ]}
            />
            <section className="hero">
              <p className="eyebrow">Prayer Times Component / package</p>
              <h1>A prop-driven prayer table.</h1>
              <p>
                This version was the reusable `react-prayer-times` package: a
                component that rendered whichever prayer-time props it received.
              </p>
            </section>
            <section className="workspace">
              <article className="panel" ref={packageRef}>
                <p className="eyebrow">Old thing</p>
                <h2>Reusable component package</h2>
                <p>
                  The repo was not a full application. It was the component
                  source and build setup that could be imported elsewhere.
                </p>
              </article>
              <article className="panel controls" ref={controlsRef}>
                <p className="eyebrow">Props</p>
                <h2>Optional rows</h2>
                {prayerRows.map(([id, label]) => (
                  <label key={id}>
                    <input
                      checked={visibleRows.includes(id)}
                      type="checkbox"
                      onChange={({ currentTarget: { checked } }) =>
                        setVisibleRows(
                          checked
                            ? [...visibleRows, id]
                            : visibleRows.filter((row) => row !== id),
                        )
                      }
                    />
                    Show {label.replace(":", "")} row
                  </label>
                ))}
              </article>
              <article className="panel tablePanel" ref={tableRef}>
                <p className="eyebrow">Component output</p>
                <h2>Rendered PrayerTimes</h2>
                <table>
                  <tbody>
                    {prayerRows
                      .filter(([id]) => visibleRows.includes(id))
                      .map(([id, label, value]) => (
                        <tr key={id}>
                          <td>{label}</td>
                          <td>{value}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </article>
            </section>
            <section className="source" ref={sourceRef}>
              <p className="eyebrow">Original source shape</p>
              <pre>{`{props.fajr && <tr><td>Fajr:</td><td>{props.fajr}</td></tr>}
{props.jumuah && <tr><td>Jumuah:</td><td>{props.jumuah}</td></tr>}

PrayerTimes.propTypes = {
  fajr: PropTypes.string,
  dhuhr: PropTypes.string,
  asr: PropTypes.string,
  maghrib: PropTypes.string,
  isha: PropTypes.string,
  jumuah: PropTypes.string
}`}</pre>
            </section>
          </main>
        ),
      ),
  );
