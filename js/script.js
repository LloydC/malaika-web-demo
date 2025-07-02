const etudiants = [
    { nom: "Jean Dupuis", age: 20, moyenne: 15.5, programme: "Informatique", boursier: false },
    { nom: "Marie Lefevre", age: 22, moyenne: 17.2, programme: "Droit", boursier: true },
    { nom: "Pierre Martin", age: 21, moyenne: 12.8, programme: "Mathématiques", boursier: false },
    { nom: "Sophie Durand", age: 19, moyenne: 14.9, programme: "Informatique", boursier: true },
    { nom: "Lucie Bernard", age: 23, moyenne: 16.3, programme: "Physique", boursier: false }
];

// 1. Capturer l'élément HTML où afficher la liste des étudiants
const studentList = document.getElementById('student-list');

//2. Créer une fonction pour générer le HTML de la liste des étudiants
function generateStudentList(list) {
    let html = '<ul>';
    list.forEach(etudiant => {
        html += `<li>${etudiant.nom} - Age: ${etudiant.age}, Moyenne: ${etudiant.moyenne}, Programme: ${etudiant.programme}, Boursier: ${etudiant.boursier ? 'Oui' : 'Non'}</li>`;
        // html = html + '<li>' + etudiant.nom + ' - Age: ' + etudiant.age + ', Moyenne: ' + etudiant.moyenne + ', Programme: ' + etudiant.programme + ', Boursier: ' + (etudiant.boursier ? 'Oui' : 'Non') + '</li>';
        // html = '<ul>' + '<li>' + etudiant.nom + ' - Age: ' + etudiant.age + ', Moyenne: ' + etudiant.moyenne + ', Programme: ' + etudiant.programme + ', Boursier: ' + (etudiant.boursier ? 'Oui' : 'Non') + '</li>';
    });
    html += '</ul>';
    return html;
}

//3. Insérer le HTML généré dans l'élément de la page
studentList.innerHTML = generateStudentList(etudiants);

// 1. Capturer l'element du bouton et on va lui rajouter une fonctionalite pour filtrer la liste d'etudiants
document.getElementById('filter-boursiers').addEventListener('click', () => {
    const boursiers = etudiants.filter(student => student.boursier === true);
    studentList.innerHTML = generateStudentList(boursiers); // Rendre les boursiers sur la page
});