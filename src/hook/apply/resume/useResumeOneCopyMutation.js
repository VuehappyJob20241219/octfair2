import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { resumeOneCopyApi } from "../../../api/apply/resume/resumeOneCopyApi";

export const useResumeOneCopyMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["resumeCopy"],
    mutationFn: (resIdx) => resumeOneCopyApi(resIdx), // ResumeMain 내 HTML코드에서 handlerCopyResumeBtn(resume.resIdx)에 입력된 resume.resIdx가 여기의 idx에 입력된다.
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["resumeList"],
      });
    },
  });
};
