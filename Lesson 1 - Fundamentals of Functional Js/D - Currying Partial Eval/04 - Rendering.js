const courses = [
    {
        title: 'Deep Dive into Functional in JavaScript',
        author: 'Zsolt Nagy',
        sections: 6
    },
    {
        title: 'Implementing and Testing JavaScript Applications using Functional Programming',
        author: 'Zsolt Nagy',
        sections: 5
    },
    {
        title: 'Mastering JavaScript Functional Programming Libraries',
        author: 'Zsolt Nagy',
        sections: 3
    }
];

getTemplate = function( { courses } ) {

    const headerTemplate = `
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Sections</th>
        </tr>
    `;
    const rowTemplate = courses.map( course => `
        <tr>
            <td>${ course.title }</td>
            <td>${ course.author }</td>
            <td>${ course.sections }</td>
        </tr>
    `).join( '' );
    return `
        <table>
            <thead>${ headerTemplate }</thead>
            <tbody>${ rowTemplate }</tbody>
        </table>`;
}

const insertTemplate = ( domNode, getTemplate, templateData ) => {
    domNode.innerHTML = getTemplate( templateData );
}

const renderTemplate =
    insertTemplate.bind( null, document.body, getTemplate );

// renderTemplate( { courses: [] } );

renderTemplate( { courses } );
