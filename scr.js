
const links = [
    {
        id: 1,
        lnk: 'aaa.pl',
        who : "ja",
        notes: ''
    },
    {
        id: 2,
        lnk: 'bb.pl',
        who : "ja",
        notes: ''
    },
    {
        id: 3,
        lnk: 'cc.pl',
        who : "ja",
        notes: 'fgdfg'
    }

]


//funkcję robiąca linki


function MyRow(){
    //zrobic button do linków
    return (

    <div class="toolbar">

        <table class="table table-striped table-responsive-sm  table-hover">
<thead class="table-dark">
    <tr scope="row">
        <th scope="col">lp</th>
        <th >odnośnik</th>
        <th>kto wysłał</th>
        <th >uwagi</th>
    </tr>
</thead>
<tbody class="table-striped">
{links.map(l => (
                <tr key={l.id}>
                  <td>{l.id}</td>
                  <td>
                    
                    <a href={l.lnk} target="_blank" rel="noopener noreferrer">
                      {l.lnk}
                    </a>
                    
                    </td>
                  <td>{l.who}</td>
                  <td>{l.notes}</td>
                </tr>
              ))}



</tbody>
</table>
</div>
    );
}

function App(){
    
    
    return <MyRow/>
}



const root=ReactDOM.createRoot(document.getElementById("root"))
    root.render(<App></App>);

    