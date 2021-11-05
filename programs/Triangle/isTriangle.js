export default function isTriangle(l1, l2, hyp) {
	if ((l1 + l2 > hyp) && (l1 + hyp > l2) && (l2 + hyp > l1)) return true

	return false
}
