/* ============================================================
   Year 11 Biology Self-Check: shared file.
   Used by index.html (students) and teacher.html (teacher report).
   Keep all three files in the same folder.

   1. ONLINE STORAGE. Fill in the two values below from your
      Firebase project (teacher.html shows the set-up steps).
      Left empty, the student page keeps results on the device only.
   ============================================================ */
var CLOUD = { projectId:'', apiKey:'' };

/* ============================================================
   2. CONTENT. To add a topic later, add a new object to SETS.
   Each question: idea (short name, used in reports: do not reuse
   a name inside one set), q (the question), table (optional),
   options, answer (index of the correct option), right (why it is
   right), fb (feedback for each wrong option:
   [mistake, why it matters, what to do]).
   ============================================================ */
var SETS = [
 { id:'cells', title:'Cells', intro:'Eight questions about cells and microscopes.', questions:[
  { idea:'What is made of cells', q:'Which of these is NOT made of cells?', options:['A mushroom','A bacterium','A virus','A leaf'], answer:2,
    right:'All living things are made of cells. A virus is not a cell: it has no cytoplasm and cannot reproduce on its own.',
    fb:{0:['You have left a living thing out of "made of cells".','Every topic in Unit 1 starts from the idea that all living things are made of cells.','List five very different living things. For each one, write whether it is one cell or many cells.'],
        1:['You have treated a bacterium as something other than a cell.','A bacterium is a whole living thing made of one cell. You will compare it with plant and animal cells in Unit 1.','Write one sentence: "A bacterium is a cell because it has ___."'],
        3:['You have left plants out of "made of cells".','Every topic in Unit 1 starts from the idea that all living things are made of cells.','List five very different living things. For each one, write whether it is one cell or many cells.']} },
  { idea:'DNA in bacteria', q:'A bacterial cell has no nucleus. Where is its DNA?', options:['It has no DNA','In the cytoplasm, with no membrane around it','In its mitochondria','In its cell wall'], answer:1,
    right:'Bacteria have DNA. It sits in the cytoplasm because there is no nucleus to hold it.',
    fb:{0:['You have decided that no nucleus means no DNA.','You will not be able to explain how bacteria pass on traits or become resistant to antibiotics.','Draw a bacterial cell and an animal cell side by side. Mark where the DNA is in each.'],
        2:['You have given a bacterium the parts of an animal cell.','Bacteria have no mitochondria and no nucleus. Comparing the two cell types is a common Unit 1 question.','Make a table with two columns: three things an animal cell has that a bacterium does not.'],
        3:['You have put the DNA in a part that only gives support.','The cell wall holds the shape of the cell. It does not hold instructions.','Write one job for the cell wall and one job for DNA.']} },
  { idea:'Energy in plant cells', q:'A root cell lives underground and gets no light. How does it get the energy it needs?', options:['By photosynthesis, using stored light','By cellular respiration in its mitochondria, using glucose sent from the leaves','It takes energy straight from the soil','Root cells do not need energy'], answer:1,
    right:'Every living cell releases energy by cellular respiration. Plant cells have mitochondria too.',
    fb:{0:['You have plants getting energy only by photosynthesis.','Photosynthesis makes glucose. Respiration releases the energy from it. If you mix these up, energy questions through Year 12 will go wrong.','Finish this sentence: "A root cell gets no light, so it gets its energy by ___."'],
        2:['You have the soil giving the plant energy.','Soil gives water and minerals, not energy. Energy comes from glucose.','Write two lists: what a plant takes from the soil, and where its energy comes from.'],
        3:['You have a living cell that needs no energy.','Every living cell uses energy all the time, to move substances and build molecules.','Name two things a root cell does that need energy.']} },
  { idea:'Linking an organelle to a cell’s job', q:'A muscle cell uses far more energy than a skin cell. Which part would you expect a muscle cell to have many more of?', options:['Chloroplasts','Ribosomes','Mitochondria','Vacuoles'], answer:2,
    right:'Mitochondria release energy from glucose. A cell that uses a lot of energy has many of them.',
    fb:{0:['You chose a part that animal cells do not have.','Chloroplasts are for photosynthesis, and only some plant cells have them.','Write the job of a chloroplast and the job of a mitochondrion, side by side.'],
        1:['You know the names of the parts but did not link one to the cell’s job.','Unit 1 asks why a cell has many of one part, not only what the part is called.','For three cell parts, write: "A cell that does ___ needs many ___ because ___."'],
        3:['You know the names of the parts but did not link one to the cell’s job.','Unit 1 asks why a cell has many of one part, not only what the part is called.','For three cell parts, write: "A cell that does ___ needs many ___ because ___."']} },
  { idea:'Cell wall and cell membrane', q:'A plant cell is placed in water with dye in it. Which part decides whether the dye gets into the cytoplasm?', options:['The cell wall','The cell membrane','The nucleus','A chloroplast'], answer:1,
    right:'The cell membrane controls what enters and leaves. The wall gives support and lets most small substances pass.',
    fb:{0:['You have the cell wall doing the membrane’s job.','Everything about how substances enter and leave cells depends on the membrane.','Draw a plant cell from memory. Label the wall and the membrane, and write one job for each.'],
        2:['You have the nucleus controlling everything.','The nucleus controls what the cell makes. The membrane controls what crosses the edge of the cell.','Sort these into nucleus or membrane: holds DNA; lets water in; keeps large molecules out; holds instructions.'],
        3:['You chose a part that has a different job.','A chloroplast makes glucose using light. It does not control what enters the cell.','Write one job each for the chloroplast and the cell membrane.']} },
  { idea:'Same DNA, different cells', q:'A liver cell and a muscle cell come from the same person. Compared with the liver cell, the DNA in the muscle cell is:', options:['completely different','the same, but different genes are switched on','the same, with all the same genes switched on','shorter, because unused genes were removed'], answer:1,
    right:'Almost every cell in your body has the same DNA. Cells differ because they use different genes.',
    fb:{0:['You think different cells contain different DNA.','Stem cells in Unit 1 and gene expression in Year 12 both rest on one idea: same DNA, different genes switched on.','Explain it with a recipe book: every kitchen has the whole book but cooks different recipes. Write your version for a liver cell and a muscle cell.'],
        2:['You have every cell using all of its genes.','If all the same genes were on, every cell would look and work the same.','Name one thing a muscle cell makes that a liver cell does not need to make.'],
        3:['You think cells delete the genes they do not use.','Unused genes are switched off, not removed. This matters for stem cells.','Write the difference between a gene that is "switched off" and a gene that is "removed".']} },
  { idea:'Changing magnification', q:'At low power you can see about 40 cells. You switch to high power. What do you expect to see?', options:['About 40 cells, each one bigger','Fewer cells, each one bigger','More cells, each one smaller','More cells, each one bigger'], answer:1,
    right:'Higher power zooms in on a smaller area, so you see fewer cells and each looks larger.',
    fb:{0:['You have not linked higher power to seeing a smaller area.','You will lose the cells you were looking at when you change lenses.','Next time you use a microscope, count the cells across the view at low power and at high power. Write down both.'],
        2:['You have high power zooming out.','High power makes things look bigger, so less fits in the view.','Next time you use a microscope, count the cells across the view at low power and at high power. Write down both.'],
        3:['You have not linked higher power to seeing a smaller area.','You cannot see more cells and bigger cells at the same time through the same eyepiece.','Next time you use a microscope, count the cells across the view at low power and at high power. Write down both.']} },
  { idea:'Total magnification', q:'A microscope has a x10 eyepiece and a x10 objective lens in place. What is the total magnification?', options:['x20','x100','x10','x1000'], answer:1,
    right:'Multiply the two lenses: 10 x 10 = 100.',
    fb:{0:['You added the two lenses. They multiply.','Every magnification and scale calculation will be wrong if you add.','Work out the total for these pairs: x10 and x4, x10 and x40, x15 and x10. Write the rule as a sentence.'],
        2:['You used only one lens.','Both lenses magnify, one after the other.','Work out the total for these pairs: x10 and x4, x10 and x40, x15 and x10. Write the rule as a sentence.'],
        3:['You multiplied, but the answer has one zero too many.','A slip in the size of a number changes every scale calculation that follows.','Work out the total for these pairs: x10 and x4, x10 and x40, x15 and x10. Check each by counting zeros.']} }
 ]},
 { id:'skills', title:'Science skills', intro:'Four questions about one experiment. A student tests whether the amount of light affects how fast pondweed makes bubbles. She counts the bubbles made in one minute at five light levels.', questions:[
  { idea:'Independent and dependent variables', q:'In the pondweed experiment, the dependent variable is:', options:['the amount of light','the number of bubbles in one minute','the type of pondweed','the temperature of the water'], answer:1,
    right:'The dependent variable is what you measure. Here that is the number of bubbles.',
    fb:{0:['You swapped what is changed with what is measured.','You cannot plan or analyse an experiment without this. It is tested in every skills question.','For three experiments, write: "I change ___. I measure ___."'],
        2:['You chose something that is kept the same.','Things kept the same are controlled variables. They are not what is being tested or measured.','Take one experiment and sort its variables into three lists: change, measure, keep the same.'],
        3:['You chose something that is kept the same.','Things kept the same are controlled variables. They are not what is being tested or measured.','Take one experiment and sort its variables into three lists: change, measure, keep the same.']} },
  { idea:'Why variables are controlled', q:'She uses the same piece of pondweed for every light level. What is the main reason?', options:['So the results are more accurate','So any change in bubbles is caused by the light, not by a different plant','So the experiment is quicker','So the pondweed does not die'], answer:1,
    right:'Keeping the plant the same means light is the only thing that changed, so light must have caused the difference.',
    fb:{0:['You used "accurate" to mean "better".','In VCE Biology, accurate has one exact meaning. Using it loosely loses marks.','Rewrite your reason without the word accurate. Say exactly what using the same plant achieves.'],
        2:['You have not seen why some things are kept the same.','If more than one thing changes, you cannot say what caused the result.','Finish this: "If she used a bigger plant at one light level, we could not tell whether ___."'],
        3:['You have not seen why some things are kept the same.','If more than one thing changes, you cannot say what caused the result.','Finish this: "If she used a bigger plant at one light level, we could not tell whether ___."']} },
  { idea:'Why experiments are repeated', q:'She tests each light level three times and works out a mean. What does this do?', options:['It makes the test fair','It reduces the effect of random errors','It fixes a timer that runs slow','It proves her hypothesis'], answer:1,
    right:'One count could be unusually high or low by chance. A mean of several counts is more trustworthy.',
    fb:{0:['You mixed up repeating with keeping things the same.','They do different jobs, and exam questions ask about each one separately.','Make two lists: what makes a test fair, and what makes a result trustworthy.'],
        2:['You think repeating fixes faulty equipment.','A slow timer is slow every time, so repeating gives the same wrong answer.','A scale always reads 2 g too high. Explain why weighing five times does not help.'],
        3:['You wrote that an experiment proves a hypothesis.','Evidence supports a hypothesis or does not support it. "Prove" loses marks.','Rewrite three conclusions, replacing "proves" with "supports".']} },
  { idea:'Describing data', q:'Her results are in the table. Which is the best description of the results?', table:[['Light level','1','2','3','4','5'],['Bubbles in one minute','4','9','15','16','16']], options:['More light always gives more bubbles','Bubbles went up from 4 to 15 between levels 1 and 3, then stayed at about 16','The pondweed ran out of carbon dioxide at level 4','Level 4 is the perfect light level for pondweed'], answer:1,
    right:'A good description says what the numbers do, in order, and uses the numbers.',
    fb:{0:['You described the pattern you expected and missed where it changed.','Exam data often changes direction or levels off. Missing the change loses the marks.','Describe the results in two parts: "From level ___ to level ___ it ___, then ___."'],
        2:['You added an explanation that the table cannot show.','Exams mark "describe" and "explain" separately. A claim the data does not support earns nothing.','In your answer, underline what you can see in the table. Circle anything you are guessing.'],
        3:['You claimed more than five results can show.','Levels 3, 4 and 5 are almost the same, so the data does not pick out one best level.','Say which levels gave the most bubbles, using the numbers from the table.']} }
 ]}
];

/* Label-the-cell activity */
var PARTS = [
 { n:1, name:'Cell wall', job:'Gives the cell support and shape', hint:'Number 1 is the thick outer layer. Plant cells have it; animal cells do not.' },
 { n:2, name:'Cell membrane', job:'Controls what enters and leaves the cell', hint:'Number 2 is the thin layer just inside the wall.' },
 { n:3, name:'Nucleus', job:'Holds the DNA, the cell’s instructions', hint:'Number 3 is the large round part with a darker spot inside.' },
 { n:4, name:'Vacuole', job:'Stores water and dissolved substances', hint:'Number 4 is the large space that fills the middle of a plant cell.' },
 { n:5, name:'Chloroplast', job:'Makes glucose using light', hint:'Number 5 is green. It is where photosynthesis happens.' },
 { n:6, name:'Mitochondrion', job:'Releases energy from glucose', hint:'Number 6 is the small orange part. It is where cellular respiration happens.' },
 { n:7, name:'Cytoplasm', job:'The fluid that fills the cell, where many reactions happen', hint:'Number 7 points to the fluid between the other parts.' }
];
var EXTRA_NAME = 'Ribosome';

/* ============================================================
   3. CHECKLIST. The Unit 1, Outcome 1 statements.
   id must never change once students have used it.
   label:true links the statement to the Label the cell activity.
   ideas links it to self-check questions, as [set id, idea name].
   ============================================================ */
/* The confidence scale students use on the checklist. */
var RATINGS = [
 { r:0, short:'New to me', text:'New to me. I do not know this yet.' },
 { r:1, short:'Recognise it', text:'I recognise it, but I could not explain it.' },
 { r:2, short:'Explain most', text:'I could explain most of it.' },
 { r:3, short:'Explain all', text:'I could explain all of it without my notes.' }
];
var CHECKLIST = [
 { title:'Cells and their structure', items:[
  { id:'c1', text:'I can explain why the cell is the basic unit of all living things.', ideas:[['cells','What is made of cells']] },
  { id:'c2', text:'I can describe the differences between prokaryotic and eukaryotic cells.', ideas:[['cells','DNA in bacteria']] },
  { id:'c3', text:'I can name the organelles in plant and animal cells and describe what each one does, including chloroplasts and mitochondria.', label:true, ideas:[['cells','Energy in plant cells'],['cells','Cell wall and cell membrane']] },
  { id:'c4', text:'I can explain how the structure of an organelle suits its function.', ideas:[['cells','Linking an organelle to a cell’s job']] },
  { id:'c5', text:'I can calculate a surface area to volume ratio and explain why it limits how big a cell can be.' },
  { id:'c6', text:'I can explain why large cells need internal compartments.' } ]},
 { title:'The plasma membrane', items:[
  { id:'m1', text:'I can describe the structure of the plasma membrane.' },
  { id:'m2', text:'I can explain how water moves across a membrane by osmosis.' },
  { id:'m3', text:'I can explain why some substances cross the membrane easily and others need help.' },
  { id:'m4', text:'I can compare facilitated diffusion with active transport.' } ]},
 { title:'How cells divide, die and specialise', items:[
  { id:'d1', text:'I can describe how prokaryotic cells divide by binary fission.' },
  { id:'d2', text:'I can describe the stages of the eukaryotic cell cycle, including each phase of mitosis and cytokinesis in plant and animal cells.' },
  { id:'d3', text:'I can explain apoptosis as programmed cell death.' },
  { id:'d4', text:'I can explain how faults in the cell cycle and in apoptosis can lead to cancer, and describe the features of cancer cells.' },
  { id:'d5', text:'I can describe the properties of stem cells, and the difference between totipotent and pluripotent cells.' } ]},
 { title:'Skills', items:[
  { id:'s1', text:'I can set up and focus a microscope and draw what I see.', ideas:[['cells','Changing magnification'],['cells','Total magnification']] },
  { id:'s2', text:'I can identify the independent, dependent and controlled variables in an experiment.', ideas:[['skills','Independent and dependent variables'],['skills','Why variables are controlled']] },
  { id:'s3', text:'I can describe a pattern in data, using numbers.', ideas:[['skills','Describing data']] },
  { id:'s4', text:'I can tell the difference between describing a result and explaining it.', ideas:[['skills','Describing data']] } ]}
];

/* ============================================================
   4. SHARED CODE. No need to edit below this line.
   ============================================================ */
var MAX_TRIES = 20;   /* tries kept for each activity */

function el(tag, attrs, kids) {
  var e = document.createElement(tag);
  if (attrs) for (var k in attrs) { if (k === 'text') e.textContent = attrs[k]; else if (k === 'cls') e.className = attrs[k]; else if (k.indexOf('on') === 0) e.addEventListener(k.slice(2), attrs[k]); else e.setAttribute(k, attrs[k]); }
  (kids || []).forEach(function (c) { if (c) e.appendChild(c); });
  return e;
}
var MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function fmtDate(ms) { var d = ms ? new Date(ms) : new Date(); return d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear(); }
function today() { return fmtDate(); }
function newId() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

/* ---------- student codes: four letters, three digits ---------- */
var CODE_LETTERS = 'ABCDEFGHJKMNPQRSTUVWXYZ', CODE_DIGITS = '23456789';
function newCode() { var s = '', i; for (i = 0; i < 4; i++) s += CODE_LETTERS[Math.floor(Math.random() * CODE_LETTERS.length)]; s += '-'; for (i = 0; i < 3; i++) s += CODE_DIGITS[Math.floor(Math.random() * CODE_DIGITS.length)]; return s; }
function normCode(s) { s = String(s || '').toUpperCase().replace(/[^A-Z0-9]/g, ''); return /^[A-Z]{4}[0-9]{3}$/.test(s) ? s.slice(0, 4) + '-' + s.slice(4) : null; }

/* ---------- progress: one object for each student ----------
   { label:{tries:[{id,t,date,right,total,missed}]},
     sets:{ setId:{tries:[{id,t,date,right,total,results:[{idea,first,guess,wrong}]}]} },
     conf:{ itemId:{r,t,r0,t0} } }   r = latest rating 0 to 3, r0 = first rating   */
function tidyTries(list) {
  list = (list || []).filter(function (x) { return x && typeof x === 'object'; });
  list.forEach(function (x, i) { if (!x.id) x.id = 'old' + i + '-' + (x.date || '').replace(/ /g, ''); if (!x.t) x.t = Date.parse(x.date) || 0; });
  list.sort(function (a, b) { return a.t - b.t; });
  return list;
}
function mergeTries(a, b) {
  var seen = {}, out = [];
  tidyTries(a).concat(tidyTries(b)).forEach(function (x) { if (!seen[x.id]) { seen[x.id] = 1; out.push(x); } });
  out.sort(function (x, y) { return x.t - y.t; });
  /* always keep the first try, so a student can see how far they have come */
  if (out.length > MAX_TRIES) out = [out[0]].concat(out.slice(out.length - (MAX_TRIES - 1)));
  return out;
}
function mergeProgress(a, b) {
  a = a || {}; b = b || {};
  var out = { label:{ tries: mergeTries(a.label && a.label.tries, b.label && b.label.tries) }, sets:{}, conf:{} }, k;
  var ids = {}; for (k in (a.sets || {})) ids[k] = 1; for (k in (b.sets || {})) ids[k] = 1;
  for (k in ids) out.sets[k] = { tries: mergeTries(a.sets && a.sets[k] && a.sets[k].tries, b.sets && b.sets[k] && b.sets[k].tries) };
  var ca = a.conf || {}, cb = b.conf || {}, cids = {}; for (k in ca) cids[k] = 1; for (k in cb) cids[k] = 1;
  for (k in cids) {
    var x = tidyRating(ca[k]), y = tidyRating(cb[k]);
    if (!x || !y) { if (x || y) out.conf[k] = x || y; continue; }
    var late = x.t >= y.t ? x : y, early = x.t0 <= y.t0 ? x : y;
    out.conf[k] = { r:late.r, t:late.t, r0:early.r0, t0:early.t0 };
  }
  return out;
}
/* A rating is { r, t, r0, t0 }. An old-style tick ({on:true}) becomes a rating of 3. */
function tidyRating(c) {
  if (!c) return null;
  if (typeof c.r !== 'number') { if (!c.on) return null; c = { r:3, t:c.t || 0 }; }
  return { r:c.r, t:c.t || 0, r0: typeof c.r0 === 'number' ? c.r0 : c.r, t0: c.t0 || c.t || 0 };
}
function ratingOf(p, id) { var c = p && p.conf && p.conf[id]; return c && typeof c.r === 'number' ? c : null; }
/* Does the rating agree with the self-check evidence?  'over', 'under' or '' */
function ratingGap(rating, ev) {
  if (!rating) return '';
  if (rating.r >= 2 && ev.state === 'notyet') return 'over';
  if (rating.r <= 1 && ev.state === 'secure') return 'under';
  return '';
}
function triesOf(p, id) { if (!p) return []; if (id === 'label') return (p.label && p.label.tries) || []; return (p.sets && p.sets[id] && p.sets[id].tries) || []; }
function lastOf(list) { return list.length ? list[list.length - 1] : null; }
function findQ(setId, idea) {
  var s = SETS.filter(function (x) { return x.id === setId; })[0]; if (!s) return null;
  return s.questions.filter(function (q) { return q.idea === idea; })[0] || null;
}
function lastActive(p) {
  var t = 0; triesOf(p, 'label').forEach(function (x) { if (x.t > t) t = x.t; });
  SETS.forEach(function (s) { triesOf(p, s.id).forEach(function (x) { if (x.t > t) t = x.t; }); });
  return t;
}

/* What to work on, from the latest try at each activity.
   kind: wrongSure (likely misconception), label, wrongGuess (likely gap), rightGuess (fragile). */
var KIND_ORDER = { wrongSure:0, label:1, wrongGuess:2, rightGuess:3 };
var KIND_TEACHER = { wrongSure:'Wrong and sure: likely misconception', label:'Labelling', wrongGuess:'Wrong and guessing: likely gap', rightGuess:'Right but guessing: fragile' };
function pointsFor(p) {
  var out = [], l = lastOf(triesOf(p, 'label'));
  if (l && l.missed && l.missed.length) out.push({ kind:'label', set:'Label the cell', idea:'Label the cell', mistake:'Not yet right: ' + l.missed.join(', ') + '.', todo:'Draw a plant cell from memory, label these parts and write one job for each. Then try the activity again.' });
  SETS.forEach(function (s) {
    var t = lastOf(triesOf(p, s.id)); if (!t) return;
    (t.results || []).forEach(function (r) {
      if (!r.first) {
        var q = findQ(s.id, r.idea), f = q && r.wrong !== undefined && r.wrong !== null ? q.fb[r.wrong] : null;
        out.push({ kind: r.guess ? 'wrongGuess' : 'wrongSure', set:s.title, idea:r.idea, mistake: f ? f[0] : (r.mistake || 'Not right on the first try.'), todo: f ? f[2] : (r.todo || 'Try the question again.') });
      } else if (r.guess) out.push({ kind:'rightGuess', set:s.title, idea:r.idea, mistake:'Right, but guessed.', todo:'Explain to a partner why the answer is right.' });
    });
  });
  out.sort(function (a, b) { return KIND_ORDER[a.kind] - KIND_ORDER[b.kind]; });
  return out;
}

/* Self-check evidence for one checklist statement.
   state: none (no questions yet), untried, secure, guess, notyet */
function evidenceFor(item, p) {
  var parts = [], linked = 0, tried = 0, bad = 0, guessed = 0;
  if (item.label) { linked++; var l = lastOf(triesOf(p, 'label')); if (l) { tried++; if (l.right < l.total) bad++; } }
  (item.ideas || []).forEach(function (pair) {
    linked++;
    var t = lastOf(triesOf(p, pair[0])); if (!t) return;
    var r = (t.results || []).filter(function (x) { return x.idea === pair[1]; })[0]; if (!r) return;
    tried++; if (!r.first) bad++; else if (r.guess) guessed++;
  });
  if (!linked) return { state:'none', text:'No self-check questions yet' };
  if (!tried) return { state:'untried', text:'Not tried yet' };
  if (bad) return { state:'notyet', text:'Not yet right' };
  if (guessed) return { state:'guess', text:'Right, but guessed' };
  if (tried < linked) return { state:'guess', text:'Right so far: ' + tried + ' of ' + linked + ' parts tried' };
  return { state:'secure', text:'Right and sure' };
}
function allItems() { var out = []; CHECKLIST.forEach(function (g) { g.items.forEach(function (i) { out.push(i); }); }); return out; }

/* ---------- online storage ----------
   mode 'online': Firebase (Firestore) through its web address, no extra code to load.
   mode 'demo':   a pretend online store kept in this browser, for trying things out.
   mode 'device': nothing leaves the device.
   Every call returns a promise of { status, data } and never throws.
   status 200 ok, 404 nothing stored, 403 not allowed, 0 no connection.   */
var Cloud = (function () {
  var wantDemo = (typeof window !== 'undefined') && (window.Y11_TEACHER || /[?&]demo\b/.test(location.search));
  var mode = CLOUD.projectId ? 'online' : (wantDemo ? 'demo' : 'device');
  var base = 'https://firestore.googleapis.com/v1/projects/' + CLOUD.projectId + '/databases/(default)/documents';
  var DEMO_KEY = 'y11bio-demo-cloud', AUTH_KEY = 'y11bio-teacher-auth';
  var auth = null;
  try { auth = JSON.parse(sessionStorage.getItem(AUTH_KEY) || 'null'); } catch (e) { auth = null; }

  function demoDb() { try { return JSON.parse(localStorage.getItem(DEMO_KEY) || '{}'); } catch (e) { return {}; } }
  function demoSave(db) { try { localStorage.setItem(DEMO_KEY, JSON.stringify(db)); } catch (e) {} }
  function later(v) { return new Promise(function (res) { setTimeout(function () { res(v); }, 30); }); }
  function isTeacher() { return !!(auth && auth.token); }

  function headers(asTeacher) { var h = { 'Content-Type':'application/json' }; if (asTeacher && auth) h.Authorization = 'Bearer ' + auth.token; return h; }
  function url(col, id, extra) { return base + '/' + col + (id ? '/' + encodeURIComponent(id) : '') + '?key=' + encodeURIComponent(CLOUD.apiKey) + (extra || ''); }
  function unpack(doc) { try { return JSON.parse(doc.fields.data.stringValue); } catch (e) { return {}; } }
  function call(u, opt) { return fetch(u, opt).then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { status:r.status, json:j }; }); }).catch(function () { return { status:0, json:{} }; }); }

  /* keep the teacher signed in: Firebase tokens last one hour */
  function fresh() {
    if (mode !== 'online' || !auth || Date.now() < auth.exp - 60000) return Promise.resolve();
    return fetch('https://securetoken.googleapis.com/v1/token?key=' + encodeURIComponent(CLOUD.apiKey), { method:'POST', headers:{ 'Content-Type':'application/x-www-form-urlencoded' }, body:'grant_type=refresh_token&refresh_token=' + encodeURIComponent(auth.refresh) })
      .then(function (r) { return r.json(); }).then(function (j) { if (j.id_token) { auth.token = j.id_token; auth.refresh = j.refresh_token; auth.exp = Date.now() + Number(j.expires_in) * 1000; keep(); } }).catch(function () {});
  }
  function keep() { try { if (auth) sessionStorage.setItem(AUTH_KEY, JSON.stringify(auth)); else sessionStorage.removeItem(AUTH_KEY); } catch (e) {} }

  function get(col, id, asTeacher) {
    if (mode === 'demo') { var d = demoDb()[col] || {}; return later(d[id] ? { status:200, data:JSON.parse(d[id]) } : { status:404, data:null }); }
    return (asTeacher ? fresh() : Promise.resolve()).then(function () { return call(url(col, id), { headers:headers(asTeacher) }); })
      .then(function (r) { return { status:r.status, data: r.status === 200 ? unpack(r.json) : null }; });
  }
  function put(col, id, obj, asTeacher) {
    if (mode === 'demo') {
      var db = demoDb();
      if (col === 'students' && !(db.roster && db.roster[id])) return later({ status:403 });
      if (col !== 'students' && !(asTeacher && isTeacher())) return later({ status:403 });
      if (!db[col]) db[col] = {}; db[col][id] = JSON.stringify(obj); demoSave(db); return later({ status:200 });
    }
    var body = JSON.stringify({ fields:{ data:{ stringValue:JSON.stringify(obj) }, updated:{ integerValue:String(Date.now()) } } });
    return (asTeacher ? fresh() : Promise.resolve()).then(function () { return call(url(col, id), { method:'PATCH', headers:headers(asTeacher), body:body }); })
      .then(function (r) { return { status:r.status }; });
  }
  function del(col, id) {
    if (mode === 'demo') { var db = demoDb(); if (db[col]) delete db[col][id]; demoSave(db); return later({ status:200 }); }
    return fresh().then(function () { return call(url(col, id), { method:'DELETE', headers:headers(true) }); }).then(function (r) { return { status:r.status }; });
  }
  function list(col) {
    if (mode === 'demo') { var d = demoDb()[col] || {}, out = {}; for (var k in d) out[k] = JSON.parse(d[k]); return later(isTeacher() ? { status:200, data:out } : { status:403, data:{} }); }
    var all = {};
    function page(tok) {
      return call(url(col, null, '&pageSize=300' + (tok ? '&pageToken=' + encodeURIComponent(tok) : '')), { headers:headers(true) }).then(function (r) {
        if (r.status !== 200) return { status:r.status, data:all };
        (r.json.documents || []).forEach(function (doc) { all[decodeURIComponent(doc.name.split('/').pop())] = unpack(doc); });
        return r.json.nextPageToken ? page(r.json.nextPageToken) : { status:200, data:all };
      });
    }
    return fresh().then(function () { return page(null); });
  }
  function signIn(email, password) {
    if (mode === 'demo') { auth = { token:'demo-teacher', email: email || 'demo', exp: Date.now() + 9e9 }; keep(); return later({ ok:true }); }
    return fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + encodeURIComponent(CLOUD.apiKey), { method:'POST', headers:{ 'Content-Type':'application/json' }, body:JSON.stringify({ email:email, password:password, returnSecureToken:true }) })
      .then(function (r) { return r.json(); })
      .then(function (j) { if (!j.idToken) return { ok:false, error:(j.error && j.error.message) || 'Sign-in failed' }; auth = { token:j.idToken, refresh:j.refreshToken, email:j.email, exp: Date.now() + Number(j.expiresIn) * 1000 }; keep(); return { ok:true }; })
      .catch(function () { return { ok:false, error:'No connection' }; });
  }
  function signOut() { auth = null; keep(); }
  return { mode:mode, get:get, put:put, del:del, list:list, signIn:signIn, signOut:signOut, isTeacher:isTeacher, email:function () { return auth && auth.email; } };
})();
