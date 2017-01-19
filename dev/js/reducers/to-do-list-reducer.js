
import {DELETE_KEY} from '../constants.js'
import {CHANGE_STATUS_KEY} from '../constants.js'

export default function (state=toDos, action){
    switch(action.type) {

        case DELETE_KEY:
            return state.filter((el)=>{
                return el.id !== action.payload.id;
            });

        case CHANGE_STATUS_KEY:
            return state.map((el) => {
                if(el.id === action.payload.id)  {
                    el.status = !el.status;
                }
                return el;
            });

        default:
            return state;
    }
}

const toDos =
    [{
        "id": 1,
        "name": "Alice Williams",
        "created": "11/27/2016",
        "modified": "11/12/2016",
        "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        "status": "ceva"
    }, {
        "id": 2,
        "name": "William Gonzales",
        "created": "8/27/2016",
        "modified": "2/15/2016",
        "description": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "status": "integer non velit donec diam neque vestibulum eget vulputate ut"
    }, {
        "id": 3,
        "name": "Stephanie Jenkins",
        "created": "11/18/2016",
        "modified": "3/28/2016",
        "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        "status": "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec"
    }, {
        "id": 4,
        "name": "Jane Reid",
        "created": "11/11/2016",
        "modified": "11/22/2016",
        "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "status": "vel nulla"
    }, {
        "id": 5,
        "name": "Jimmy Medina",
        "created": "8/30/2016",
        "modified": "11/8/2016",
        "description": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "status": "eu mi nulla ac enim in tempor turpis nec euismod"
    }, {
        "id": 6,
        "name": "Susan Moore",
        "created": "5/4/2016",
        "modified": "11/30/2016",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        "status": "lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar"
    }, {
        "id": 7,
        "name": "Adam Sims",
        "created": "3/3/2016",
        "modified": "8/5/2016",
        "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        "status": "in consequat ut nulla sed accumsan felis ut at dolor"
    }, {
        "id": 8,
        "name": "Juan Morrison",
        "created": "4/29/2016",
        "modified": "9/30/2016",
        "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        "status": "id lobortis convallis tortor"
    }, {
        "id": 9,
        "name": "Wanda Powell",
        "created": "2/24/2016",
        "modified": "3/17/2016",
        "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "status": "donec odio justo sollicitudin ut suscipit a feugiat et eros"
    }, {
        "id": 10,
        "name": "Jason Hudson",
        "created": "9/6/2016",
        "modified": "1/20/2016",
        "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        "status": "morbi vel lectus in quam fringilla rhoncus mauris"
    }, {
        "id": 11,
        "name": "Theresa Jones",
        "created": "6/23/2016",
        "modified": "10/25/2016",
        "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
        "status": "nulla nunc purus phasellus"
    }, {
        "id": 12,
        "name": "Ruby Burns",
        "created": "1/9/2017",
        "modified": "8/10/2016",
        "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "status": "tincidunt lacus at velit vivamus vel nulla eget"
    }, {
        "id": 13,
        "name": "Frances Lane",
        "created": "2/7/2016",
        "modified": "8/17/2016",
        "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        "status": "odio elementum eu interdum eu tincidunt in leo maecenas pulvinar"
    }, {
        "id": 14,
        "name": "Barbara Hudson",
        "created": "1/9/2017",
        "modified": "5/9/2016",
        "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "status": "vestibulum sed magna at nunc commodo placerat praesent blandit nam"
    }, {
        "id": 15,
        "name": "Norma Lopez",
        "created": "2/4/2016",
        "modified": "7/13/2016",
        "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "status": "justo sollicitudin ut suscipit a"
    }, {
        "id": 16,
        "name": "Mark Brown",
        "created": "3/22/2016",
        "modified": "12/25/2016",
        "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
        "status": "congue eget semper rutrum"
    }, {
        "id": 17,
        "name": "Kathy Fisher",
        "created": "12/12/2016",
        "modified": "6/12/2016",
        "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "status": "ornare consequat lectus in est risus"
    }, {
        "id": 18,
        "name": "Juan Cook",
        "created": "8/19/2016",
        "modified": "7/19/2016",
        "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "status": "vulputate ut ultrices vel augue vestibulum ante ipsum"
    }, {
        "id": 19,
        "name": "Julie Burton",
        "created": "8/15/2016",
        "modified": "1/1/2017",
        "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "status": "sodales sed"
    }, {
        "id": 20,
        "name": "James Olson",
        "created": "9/9/2016",
        "modified": "9/17/2016",
        "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "status": "ut ultrices vel augue vestibulum ante ipsum primis"
    }, {
        "id": 21,
        "name": "Edward Garcia",
        "created": "3/23/2016",
        "modified": "1/27/2016",
        "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "status": "luctus et ultrices posuere cubilia curae donec pharetra"
    }, {
        "id": 22,
        "name": "Christopher Jordan",
        "created": "8/15/2016",
        "modified": "12/22/2016",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "status": "vel sem sed sagittis nam congue risus"
    }, {
        "id": 23,
        "name": "Lori Foster",
        "created": "8/11/2016",
        "modified": "11/2/2016",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        "status": "turpis elementum ligula vehicula consequat morbi a"
    }, {
        "id": 24,
        "name": "James Graham",
        "created": "2/5/2016",
        "modified": "9/8/2016",
        "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "status": "morbi odio odio elementum"
    }, {
        "id": 25,
        "name": "Cynthia Price",
        "created": "12/3/2016",
        "modified": "5/9/2016",
        "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "status": "nibh in quis justo maecenas rhoncus aliquam lacus"
    }, {
        "id": 26,
        "name": "Sarah Berry",
        "created": "11/25/2016",
        "modified": "10/14/2016",
        "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "status": "turpis eget elit sodales scelerisque mauris sit amet eros"
    }, {
        "id": 27,
        "name": "Jesse Webb",
        "created": "10/12/2016",
        "modified": "8/14/2016",
        "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        "status": "luctus tincidunt nulla mollis molestie lorem"
    }, {
        "id": 28,
        "name": "Jason Palmer",
        "created": "2/21/2016",
        "modified": "8/20/2016",
        "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        "status": "amet nunc viverra dapibus nulla suscipit ligula"
    }, {
        "id": 29,
        "name": "Pamela Reyes",
        "created": "10/20/2016",
        "modified": "11/29/2016",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
        "status": "eget tempus vel pede morbi porttitor lorem"
    }, {
        "id": 30,
        "name": "Roger James",
        "created": "9/29/2016",
        "modified": "7/29/2016",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "status": "purus phasellus in felis donec"
    }, {
        "id": 31,
        "name": "Anne Jacobs",
        "created": "7/1/2016",
        "modified": "11/19/2016",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
        "status": "varius nulla facilisi cras non velit nec nisi"
    }, {
        "id": 32,
        "name": "Jean Gibson",
        "created": "5/28/2016",
        "modified": "6/18/2016",
        "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "status": "porta volutpat quam pede"
    }, {
        "id": 33,
        "name": "Deborah Ross",
        "created": "1/3/2017",
        "modified": "3/5/2016",
        "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        "status": "rhoncus mauris enim leo rhoncus sed vestibulum"
    }, {
        "id": 34,
        "name": "Janet Harper",
        "created": "12/4/2016",
        "modified": "7/21/2016",
        "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        "status": "eget tincidunt eget tempus"
    }, {
        "id": 35,
        "name": "Shawn Duncan",
        "created": "4/27/2016",
        "modified": "1/28/2016",
        "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "status": "praesent id massa"
    }, {
        "id": 36,
        "name": "Karen Reed",
        "created": "2/1/2016",
        "modified": "6/30/2016",
        "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        "status": "at vulputate vitae nisl aenean lectus"
    }, {
        "id": 37,
        "name": "Kathy Walker",
        "created": "11/21/2016",
        "modified": "1/29/2016",
        "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "status": "libero nullam sit amet turpis elementum"
    }, {
        "id": 38,
        "name": "Harold Bennett",
        "created": "5/6/2016",
        "modified": "1/6/2017",
        "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "status": "elit ac nulla sed vel enim sit"
    }, {
        "id": 39,
        "name": "Mark Rice",
        "created": "7/31/2016",
        "modified": "7/2/2016",
        "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "status": "id massa id nisl venenatis"
    }, {
        "id": 40,
        "name": "Victor Miller",
        "created": "4/26/2016",
        "modified": "8/26/2016",
        "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
        "status": "molestie sed justo pellentesque viverra pede ac diam cras"
    }, {
        "id": 41,
        "name": "Harold Webb",
        "created": "11/29/2016",
        "modified": "11/20/2016",
        "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "status": "sit amet eros suspendisse accumsan tortor quis turpis sed"
    }, {
        "id": 42,
        "name": "Steve Hayes",
        "created": "4/8/2016",
        "modified": "7/30/2016",
        "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        "status": "sapien placerat ante nulla"
    }, {
        "id": 43,
        "name": "Kathryn Andrews",
        "created": "4/1/2016",
        "modified": "11/16/2016",
        "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "status": "pharetra magna ac consequat metus sapien ut nunc"
    }, {
        "id": 44,
        "name": "Theresa Miller",
        "created": "3/29/2016",
        "modified": "10/28/2016",
        "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "status": "lobortis convallis tortor risus dapibus augue vel"
    }, {
        "id": 45,
        "name": "Mildred Lawson",
        "created": "6/8/2016",
        "modified": "6/30/2016",
        "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        "status": "quam sapien varius ut blandit non interdum"
    }, {
        "id": 46,
        "name": "Shawn Diaz",
        "created": "8/26/2016",
        "modified": "7/6/2016",
        "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "status": "potenti in"
    }, {
        "id": 47,
        "name": "Henry Russell",
        "created": "5/11/2016",
        "modified": "3/18/2016",
        "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "status": "nibh in"
    }, {
        "id": 48,
        "name": "Angela Rice",
        "created": "11/19/2016",
        "modified": "1/6/2017",
        "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "status": "mauris vulputate elementum nullam varius nulla"
    }, {
        "id": 49,
        "name": "Harry Griffin",
        "created": "3/26/2016",
        "modified": "8/2/2016",
        "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "status": "interdum in ante vestibulum ante ipsum"
    }, {
        "id": 50,
        "name": "Laura Hamilton",
        "created": "5/3/2016",
        "modified": "3/12/2016",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "status": "eu tincidunt in leo maecenas pulvinar lobortis"
    }, {
        "id": 51,
        "name": "Charles Schmidt",
        "created": "6/9/2016",
        "modified": "3/2/2016",
        "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        "status": "potenti nullam porttitor lacus at turpis donec"
    }, {
        "id": 52,
        "name": "Dennis Russell",
        "created": "10/21/2016",
        "modified": "4/10/2016",
        "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "status": "pellentesque quisque porta volutpat erat quisque erat"
    }, {
        "id": 53,
        "name": "Pamela Murphy",
        "created": "12/31/2016",
        "modified": "7/30/2016",
        "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "status": "et eros vestibulum ac est lacinia"
    }, {
        "id": 54,
        "name": "Eric Baker",
        "created": "1/30/2016",
        "modified": "10/28/2016",
        "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "status": "posuere cubilia curae mauris viverra diam"
    }, {
        "id": 55,
        "name": "Lisa Perkins",
        "created": "3/9/2016",
        "modified": "10/25/2016",
        "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "status": "curae duis faucibus"
    }, {
        "id": 56,
        "name": "Kelly Oliver",
        "created": "3/29/2016",
        "modified": "12/6/2016",
        "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "status": "leo odio porttitor id consequat in consequat ut nulla sed"
    }, {
        "id": 57,
        "name": "Debra Coleman",
        "created": "9/8/2016",
        "modified": "1/7/2017",
        "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        "status": "nam nulla integer pede justo"
    }, {
        "id": 58,
        "name": "Sean Stone",
        "created": "3/24/2016",
        "modified": "8/8/2016",
        "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "status": "mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et"
    }, {
        "id": 59,
        "name": "Lois Reed",
        "created": "7/2/2016",
        "modified": "4/3/2016",
        "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
        "status": "ut tellus nulla ut"
    }, {
        "id": 60,
        "name": "Debra Simmons",
        "created": "8/8/2016",
        "modified": "7/25/2016",
        "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "status": "elementum in hac habitasse platea dictumst morbi"
    }, {
        "id": 61,
        "name": "Ryan Wallace",
        "created": "7/19/2016",
        "modified": "8/26/2016",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "status": "eu felis"
    }, {
        "id": 62,
        "name": "Kenneth Collins",
        "created": "8/8/2016",
        "modified": "11/16/2016",
        "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        "status": "blandit lacinia erat vestibulum"
    }, {
        "id": 63,
        "name": "Chris Campbell",
        "created": "2/24/2016",
        "modified": "10/17/2016",
        "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
        "status": "nullam orci pede venenatis non sodales sed tincidunt eu felis"
    }, {
        "id": 64,
        "name": "Stephanie Adams",
        "created": "2/29/2016",
        "modified": "2/25/2016",
        "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "status": "lorem ipsum dolor sit amet consectetuer adipiscing"
    }, {
        "id": 65,
        "name": "Nancy Hayes",
        "created": "1/8/2017",
        "modified": "5/16/2016",
        "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "status": "sapien urna pretium nisl ut volutpat sapien arcu sed"
    }, {
        "id": 66,
        "name": "Jean Fuller",
        "created": "5/12/2016",
        "modified": "12/15/2016",
        "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        "status": "tortor sollicitudin mi sit amet lobortis sapien"
    }, {
        "id": 67,
        "name": "Daniel Frazier",
        "created": "2/17/2016",
        "modified": "5/18/2016",
        "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "status": "pede morbi porttitor lorem id"
    }, {
        "id": 68,
        "name": "Tammy Castillo",
        "created": "11/12/2016",
        "modified": "11/10/2016",
        "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        "status": "posuere cubilia curae"
    }, {
        "id": 69,
        "name": "Donald Elliott",
        "created": "8/14/2016",
        "modified": "11/6/2016",
        "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "status": "tempus vel pede morbi"
    }, {
        "id": 70,
        "name": "Elizabeth Franklin",
        "created": "4/12/2016",
        "modified": "9/10/2016",
        "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "status": "dolor sit"
    }, {
        "id": 71,
        "name": "Victor Cruz",
        "created": "5/26/2016",
        "modified": "5/25/2016",
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "status": "fermentum donec"
    }, {
        "id": 72,
        "name": "Martin Murray",
        "created": "8/6/2016",
        "modified": "8/7/2016",
        "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "status": "purus aliquet at feugiat non"
    }, {
        "id": 73,
        "name": "Jean Barnes",
        "created": "6/27/2016",
        "modified": "5/7/2016",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
        "status": "libero convallis eget"
    }, {
        "id": 74,
        "name": "Patrick Martin",
        "created": "11/17/2016",
        "modified": "12/26/2016",
        "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "status": "pede posuere nonummy integer non velit donec diam"
    }, {
        "id": 75,
        "name": "Brenda Ramos",
        "created": "3/9/2016",
        "modified": "3/15/2016",
        "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
        "status": "pede justo eu massa donec dapibus duis at"
    }, {
        "id": 76,
        "name": "Daniel Campbell",
        "created": "1/10/2017",
        "modified": "7/10/2016",
        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        "status": "ipsum primis in faucibus orci luctus et ultrices"
    }, {
        "id": 77,
        "name": "Jerry Jordan",
        "created": "7/21/2016",
        "modified": "10/13/2016",
        "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        "status": "sapien urna pretium nisl ut"
    }, {
        "id": 78,
        "name": "Jane Reyes",
        "created": "5/1/2016",
        "modified": "9/19/2016",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        "status": "aliquam augue quam sollicitudin vitae consectetuer eget rutrum"
    }, {
        "id": 79,
        "name": "Edward King",
        "created": "8/1/2016",
        "modified": "4/21/2016",
        "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "status": "ipsum primis"
    }, {
        "id": 80,
        "name": "Philip Austin",
        "created": "5/17/2016",
        "modified": "2/9/2016",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        "status": "orci nullam"
    }, {
        "id": 81,
        "name": "Christine Mendoza",
        "created": "10/5/2016",
        "modified": "6/5/2016",
        "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "status": "condimentum curabitur in libero ut massa volutpat convallis"
    }, {
        "id": 82,
        "name": "Diana Richardson",
        "created": "4/13/2016",
        "modified": "6/24/2016",
        "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
        "status": "volutpat convallis morbi odio odio"
    }, {
        "id": 83,
        "name": "Jeffrey Sullivan",
        "created": "3/14/2016",
        "modified": "3/10/2016",
        "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "status": "nulla ultrices aliquet maecenas leo odio"
    }, {
        "id": 84,
        "name": "Philip Cunningham",
        "created": "1/8/2017",
        "modified": "10/17/2016",
        "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "status": "ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus"
    }, {
        "id": 85,
        "name": "Carl Jacobs",
        "created": "12/7/2016",
        "modified": "9/11/2016",
        "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
        "status": "fringilla rhoncus"
    }, {
        "id": 86,
        "name": "Anna White",
        "created": "8/31/2016",
        "modified": "2/29/2016",
        "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "status": "nonummy integer non velit donec diam neque"
    }, {
        "id": 87,
        "name": "Ruth Perry",
        "created": "10/9/2016",
        "modified": "1/5/2017",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
        "status": "ante ipsum primis"
    }, {
        "id": 88,
        "name": "Annie Alexander",
        "created": "5/18/2016",
        "modified": "3/2/2016",
        "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "status": "nisi volutpat eleifend donec ut dolor morbi vel lectus"
    }, {
        "id": 89,
        "name": "Henry Garrett",
        "created": "8/17/2016",
        "modified": "12/1/2016",
        "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "status": "natoque penatibus et magnis dis parturient montes nascetur"
    }, {
        "id": 90,
        "name": "Stephanie Anderson",
        "created": "9/27/2016",
        "modified": "7/9/2016",
        "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "status": "pede ullamcorper augue a suscipit nulla elit"
    }, {
        "id": 91,
        "name": "Eugene Ward",
        "created": "10/24/2016",
        "modified": "10/4/2016",
        "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "status": "sapien in sapien iaculis congue vivamus metus arcu"
    }, {
        "id": 92,
        "name": "Barbara Kim",
        "created": "12/24/2016",
        "modified": "4/20/2016",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        "status": "nec nisi vulputate nonummy maecenas tincidunt lacus at velit"
    }, {
        "id": 93,
        "name": "Joe Wright",
        "created": "12/1/2016",
        "modified": "6/23/2016",
        "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "status": "eget eros elementum pellentesque quisque porta volutpat"
    }, {
        "id": 94,
        "name": "Earl Russell",
        "created": "5/18/2016",
        "modified": "9/17/2016",
        "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "status": "urna pretium nisl ut volutpat sapien arcu"
    }, {
        "id": 95,
        "name": "Lori Washington",
        "created": "7/13/2016",
        "modified": "12/21/2016",
        "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        "status": "rhoncus aliquam lacus morbi quis"
    }, {
        "id": 96,
        "name": "Sharon Freeman",
        "created": "10/9/2016",
        "modified": "7/1/2016",
        "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "status": "aenean sit amet justo morbi ut odio"
    }, {
        "id": 97,
        "name": "Patricia Phillips",
        "created": "3/31/2016",
        "modified": "7/3/2016",
        "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
        "status": "potenti in eleifend quam"
    }, {
        "id": 98,
        "name": "Rose Day",
        "created": "11/25/2016",
        "modified": "4/15/2016",
        "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "status": "etiam justo etiam"
    }, {
        "id": 99,
        "name": "Anthony Bradley",
        "created": "11/7/2016",
        "modified": "7/26/2016",
        "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "status": "ante vel"
    }, {
        "id": 100,
        "name": "Roy Hunter",
        "created": "2/3/2016",
        "modified": "7/13/2016",
        "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "status": "ullamcorper purus"
    }]

