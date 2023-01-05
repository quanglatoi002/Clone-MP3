export const getArrSlider = (start, end, number) => {
    const limit = start > end ? number : end;
    let output = [];
    for (let i = start; i <= limit; i++) {
        output.push(i);
    }
    if (start > end) {
        for (let i = 0; i <= end; i++) {
            output.push(i);
        }
    }
    return output;
};
//length = 5
// [1,2,3] [2,3,4] [3,4,5] [4,5,1]
//dki đầu tiên nếu start > end
// getArrSlider(1, 3, 10)
//output = []
// limit = 3
// let i = 1; i <= 3; i++
//  output[1]
// let i = 2; i <= 3; i++
//output[1,2]
// let i = 3; i <= 3; i++
//output[1,2,3]
// nếu start > end => thì gán lại start = 1 rồi tiếp tục lập lại vòng lặp
//vd ----> start = 4 > end = 3
// for(let i = 0; i <= end; i++)
//chạy tiết vòng lặp phía trên thì kết quả sẽ là [2,3,1]
