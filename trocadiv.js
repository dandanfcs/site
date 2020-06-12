let cont = 0;

function Next() {
    cont++;
    if (cont == 1) {
        cromo();
    }
    if (cont == 2) {
        massagem();
    }
    if (cont == 3) {
        cont = 0;
        reiki();
    }

}



function Prev() {

    if (cont == 1) {
        cont--;
        reiki();
    }


    if (cont == 2) {
        cont--;
        cromo();
    }



}




function reiki() {
    document.getElementById('img').src = './web.png';


    let text = document.getElementById('l2');

    text.innerHTML = ` <h2>Desevolvimento-Web</h2>
    <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iure nisi porro rem possimus, voluptatem quisquam at recusandae molestiae minima enim doloribus numquam, fuga temporibus sed reiciendis obcaecati, labore praesentium.

    </P>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, explicabo iure sed dolores facere accusantium deserunt. Odio delectus fuga laboriosam provident! Facilis unde facere aliquam quidem aperiam soluta velit placeat.</p>
</div> `;


}

function cromo() {
    document.getElementById('img').src = './mobiles.png';

    let text = document.getElementById('l2');

    text.innerHTML = ` <h2>Desevolvimento Mobile</h2>
    <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iure nisi porro rem possimus, voluptatem quisquam at recusandae molestiae minima enim doloribus numquam, fuga temporibus sed reiciendis obcaecati, labore praesentium.

    </P>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, explicabo iure sed dolores facere accusantium deserunt. Odio delectus fuga laboriosam provident! Facilis unde facere aliquam quidem aperiam soluta velit placeat.</p>
`;


}

function massagem() {
    document.getElementById('img').src = './comerces.png';


    let text = document.getElementById('l2');

    text.innerHTML = `<h2>Comércio Eletrônico</h2>
    <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iure nisi porro rem possimus, voluptatem quisquam at recusandae molestiae minima enim doloribus numquam, fuga temporibus sed reiciendis obcaecati, labore praesentium.

    </P>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, explicabo iure sed dolores facere accusantium deserunt. Odio delectus fuga laboriosam provident! Facilis unde facere aliquam quidem aperiam soluta velit placeat.</p> `;


}