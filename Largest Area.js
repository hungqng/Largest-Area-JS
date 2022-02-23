function largestArea(samples) {
    // Write your estArcode here
    
    const r = samples.length, c = r > 0 ? samples[0].length : 0;
    const a = Array(r + 1).fill(0).map(() => Array(c + 1).fill(0));
    
    let ans = 0;
    for (let i = 1; i <= r; i++){
        for (let j = 1; j <= c; j++){
            if (samples[i-1][j-1] == '1'){
                a[i][j] = Math.min(Math.min(a[i][j - 1], a[i - 1][j]), a[i - 1][j - 1]) + 1;   
        
                ans = Math.max(ans, a[i][j]);
            }
        }
    }
    return ans;
}