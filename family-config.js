// ── PER-FAMILY DEPLOYMENT CONFIG — BURRIS FAMILY ────────────────────────────
// This is the ONLY file that differs from the main howe-academy codebase.
// Brand stays "Howe Academy"; this file tells the app WHICH family it serves:
// their own Firebase project and the starting kid roster.
//
// The roster below is only the FIRST-BOOT default — once Melanie saves names in
// Admin → Settings → Family, the app reads settings/family from their database
// and this list is ignored.
//
// notebook.template / notebook.gradeLabel: consumed by the notebook template
// mapping (build step 2+). Template = the CONTENT level; gradeLabel = what
// prints on covers/headers. Zuri is on-paper 2nd grade working at 1st-grade
// level, so those are deliberately different.
window.HA_FAMILY = {
  familyId: "burris",
  familyName: "Burris Family",
  // no sitterName → the sitter tab is hidden for this family
  windowText: "School day",   // first-boot schedule-window banner; Melanie can set real hours in-app

  firebase: {
    apiKey:"AIzaSyDzZTCmxPSe_9XQ-ZCnVIiZnCd_h0xDbCA",
    authDomain:"how-academy-burris.firebaseapp.com",
    databaseURL:"https://how-academy-burris-default-rtdb.firebaseio.com",
    projectId:"how-academy-burris",
    storageBucket:"how-academy-burris.firebasestorage.app",
    messagingSenderId:"796707224599",
    appId:"1:796707224599:web:02383042ce55b9ca087052"
  },
  roster: [
    {id:"zuri", name:"Zuri", color:"#5b3a8c", badge:"#ede9fe", schoolAge:true,
     notebook:{template:"first", gradeLabel:"2nd"}},
    // "d3" not "3d": kid ids feed CSS class names, which can't start with a digit
    {id:"d3",   name:"3D",   color:"#c45e1a", badge:"#ffedd5", schoolAge:false, // Pre-K: no 180-day attendance, separate drills track
     notebook:{template:"prek", gradeLabel:"Pre-K"}}
  ]
};
