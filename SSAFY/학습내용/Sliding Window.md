#### 11659 - 구간합4

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		
		int N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());
		
		int[] nums = new int[N+1];
		
		st = new StringTokenizer(br.readLine());
		for(int i = 0; i < N; i++) {
			nums[i+1] = nums[i] + Integer.parseInt(st.nextToken());
		}
		
		for(int i = 0; i < M; i++) {
			String[] str = br.readLine().split(" ");
			int a = Integer.parseInt(str[0]);
			int b = Integer.parseInt(str[1]);
			System.out.println(nums[b]-nums[a-1]);
		}
	}
}
```

- `슬라이딩 윈도우`가 배열의 크기만큼 조작해서 이동하는 줄 알았다.
- 들어오는 값들의 합을 점차 누적하며 값을 넣어주고 해당하는 구간에 대하여 인덱스간 값의 차를 구하면 해당 값이 해당 인덱스 구간의 합이 된다.
- 이녀석 쓸만할지도..