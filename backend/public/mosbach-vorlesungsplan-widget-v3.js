/* eslint-disable */
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: cyan; icon-glyph: user-graduate;
// Made by Felix K. INF19A and Lars Rickert INF19B :)

const course = args.widgetParameter || 'inf19a';
let lectures = [];
let hasLoadingError = false;

try {
  lectures = await fetchNextLectures(2);
} catch (e) {
  hasLoadingError = true;
}

const widget = new ListWidget();
await createWidget();

// If you run it in the app
if (!config.runsInWidget) await widget.presentSmall();
Script.setWidget(widget);
Script.complete();

// Create Widget
async function createWidget() {
  // Background Gradient
  const gradient = new LinearGradient();
  gradient.locations = [0, 0.5, 1];
  gradient.colors = [
    new Color('0F2027'),
    new Color('203A43'),
    new Color('2C5364'),
  ];
  widget.backgroundGradient = gradient;

  const layout = widget.addStack();
  layout.layoutVertically();

  const logoStack = layout.addStack();
  logoStack.layoutHorizontally();
  logoStack.setPadding(6, 0, 0, 0);
  logoStack.addSpacer(90);

  const vStack = layout.addStack();
  vStack.layoutVertically();

  // DHBW Logo
  const logoReq = new Request('https://i.ibb.co/XkRGw53/logo.png');
  const logoImg = await logoReq.loadImage();
  const wimg = logoStack.addImage(logoImg);
  wimg.imageSize = new Size(40, 40);
  wimg.rightAlignImage();
  vStack.addSpacer(8);

  let text;

  if (hasLoadingError) text = 'Vorlesungen konnten nicht geladen werden.';
  else if (lectures.length === 0) text = 'Viel Spaß in der Praxisphase 😎';
  if (text) return addText(vStack, text, 15, true);

  let titleText;

  if (isToday(lectures[0].start)) titleText = 'Heute';
  else if (isToday(lectures[0].start, 1)) titleText = 'Morgen';
  else {
    titleText = `${getWeekday(lectures[0].start)} (${lectures[0].start
      .getDate()
      .toString()
      .padStart(2, '0')}.${lectures[0].start.getMonth() + 1})`;
  }

  addText(vStack, titleText, 16, true);
  vStack.addSpacer(8);

  const onSameDay =
    lectures.length >= 2
      ? datesOnSameDay(lectures[0].start, lectures[1].start)
      : false;
  const max = onSameDay ? 2 : 1;

  for (let i = 0; i < max; i++) {
    addText(vStack, lectures[i].name, 10);

    const schedule = vStack.addText(
      `${timeToString(lectures[i].start)} - ${timeToString(lectures[i].end)}`
    );
    schedule.textColor = Color.white();
    vStack.addSpacer(6);
  }
}

// Getting count next LecturingDataFromAPI
async function fetchNextLectures(count) {
  const req = new Request(
    `https://api.vorlesungsplan.lars-rickert.de/lectures/${course}?excludePast=true`
  );

  try {
    const lectures = (await req.loadJSON()).slice(0, count);

    lectures.forEach((l) => {
      l.start = new Date(l.start);
      l.end = new Date(l.end);
      l.lastModified = new Date(l.lastModified);
    });

    return lectures;
  } catch (e) {
    console.error(e);
    throw new Error();
  }
}

function addText(stack, text, size, bold = false) {
  const txt = stack.addText(text);
  txt.font = bold
    ? Font.boldRoundedSystemFont(size)
    : Font.mediumRoundedSystemFont(size);
  txt.textColor = Color.white();
}

// check if date is today
function isToday(date, offset = 0) {
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  todayStart.setDate(todayStart.getDate() + offset);

  const todayEnd = new Date();
  todayEnd.setHours(23, 59, 59, 59);
  todayEnd.setDate(todayEnd.getDate() + offset);

  return (
    date.getTime() >= todayStart.getTime() &&
    date.getTime() <= todayEnd.getTime()
  );
}

function datesOnSameDay(a, b) {
  return (
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear()
  );
}

// Getting Weekday as String
function getWeekday(date) {
  const weekdays = [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
  ];
  return weekdays[date.getDay()];
}

// Create 24H Timestring e.g.: 12:23
function timeToString(date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}
