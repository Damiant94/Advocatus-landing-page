const answers = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate alias aliquid voluptatem labore delectus quas, unde repellendus! Expedita necessitatibus velit quaerat eius, aperiam hic vero fuga molestiae harum placeat? Labore possimus, at facilis commodi eligendi ducimus libero esse nemo impedit similique laudantium fuga consequatur minus, quidem harum obcaecati ipsa deleniti? Ratione quas libero laboriosam reiciendis optio nemo adipisci voluptatem.",

    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nulla quo numquam accusamus nisi. Reiciendis qui, consectetur, ullam quas maiores dolore exercitationem hic velit magni quia inventore. Incidunt, impedit accusamus. Aliquid maxime hic repellendus quo earum iure velit, perspiciatis ad id reiciendis quidem laboriosam nihil ex nisi sit fugit voluptate perferendis corporis animi repudiandae quis, ratione error. Ullam, harum distinctio.",
    
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic harum laboriosam, consequuntur repellendus modi ipsam cum autem facilis mollitia ducimus deleniti ullam maxime illum vero molestiae repudiandae sequi impedit animi! Commodi itaque excepturi tempore labore rem nihil quis culpa facilis earum, reiciendis modi officiis, illum at enim vero, animi ex consequuntur atque sapiente? Earum deserunt sunt consequatur maxime corrupti iste!",
    
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima cupiditate dicta eos facilis placeat incidunt, laudantium consequatur atque culpa doloremque iste veniam alias, ullam vero impedit quia, ab iusto corporis. Voluptatibus cum aliquid maiores ipsum ullam nihil sunt quis deleniti reprehenderit ipsam optio, adipisci dignissimos dolores pariatur quidem temporibus culpa impedit laudantium asperiores quisquam, veniam ipsa debitis. Deserunt, labore tenetur!",
    
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rem nisi doloremque repellat voluptatum nobis quasi doloribus eius perferendis necessitatibus, assumenda qui animi aliquam aperiam placeat in, beatae atque ipsa. Amet eaque culpa repellat molestiae, nostrum inventore dolor ab pariatur? Dolores obcaecati, perspiciatis eaque sint tenetur repellat, maxime nemo quis velit sapiente delectus aut, maiores quidem aliquam suscipit tempore unde!",
    
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit iste iure nostrum quos delectus repudiandae corrupti, placeat animi eveniet nihil minus, deleniti architecto explicabo natus voluptates et vel doloremque odio. Dolores amet eius, culpa ut recusandae laboriosam est adipisci mollitia architecto assumenda, animi iste incidunt pariatur ex saepe delectus alias et iure quis aut. Voluptates quae eaque laboriosam mollitia exercitationem." 
];

const classMinus = "fas fa-minus";
const classPlus = "fas fa-plus";

const questions = document.querySelectorAll(".questions div");
const answer = document.querySelector(".answer");

questions.forEach((question, index) => {
    question.onclick = () => {
        if (question.className === "active") return;
        question.className = "active"
        answer.innerText = answers[index];
        question.lastChild.className = classMinus;
        for (const q of questions) {
            if (q !== question) {
                q.lastChild.className = classPlus;
                q.className = "";
            }
        }
    }
});


